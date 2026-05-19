import os from "node:os";

const serverStartTime = Date.now();

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${Math.round((bytes / Math.pow(k, i)) * 100) / 100} ${sizes[i]}`;
}

function formatDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
  return `${seconds}s`;
}

function writeJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function writeText(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(payload);
}

export function viteHealthPlugin() {
  const status = {
    state: "idle",
    errors: [],
    warnings: [],
    lastCompileTime: null,
    lastSuccessTime: null,
    compileDuration: 0,
    totalCompiles: 0,
    firstCompileTime: null,
  };

  return {
    name: "vite-health-plugin",
    apply: "serve",
    configureServer(server) {
      const markCompiling = () => {
        const now = Date.now();
        status.state = "compiling";
        status.lastCompileTime = now;
        if (!status.firstCompileTime) status.firstCompileTime = now;
      };

      const markSuccess = () => {
        const now = Date.now();
        status.state = "success";
        status.lastSuccessTime = now;
        status.totalCompiles += 1;
        status.compileDuration = status.lastCompileTime
          ? now - status.lastCompileTime
          : 0;
        status.errors = [];
      };

      const markFailure = (error) => {
        status.state = "failed";
        status.errors = [
          {
            message: error?.message || "Unknown Vite error",
            stack: error?.stack,
          },
        ];
      };

      // Seed initial healthy state once dev server boots.
      markCompiling();
      markSuccess();

      server.watcher.on("change", () => {
        markCompiling();
      });

      server.watcher.on("add", () => {
        markCompiling();
      });

      server.watcher.on("unlink", () => {
        markCompiling();
      });

      server.watcher.on("error", (error) => {
        markFailure(error);
      });

      server.middlewares.use((req, res, next) => {
        if (!req.url) return next();

        if (status.state === "compiling") {
          markSuccess();
        }

        const url = req.url.split("?")[0];
        if (req.method !== "GET" || !url.startsWith("/health")) return next();

        const uptime = Date.now() - serverStartTime;
        const memUsage = process.memoryUsage();
        const simpleStatus = {
          state: status.state,
          isHealthy: status.state === "success",
          errorCount: status.errors.length,
          warningCount: status.warnings.length,
        };

        if (url === "/health") {
          return writeJson(res, simpleStatus.isHealthy ? 200 : 503, {
            status: simpleStatus.isHealthy ? "healthy" : "unhealthy",
            timestamp: new Date().toISOString(),
            uptime: {
              seconds: Math.floor(uptime / 1000),
              formatted: formatDuration(uptime),
            },
            vite: {
              ...simpleStatus,
              hasCompiled: status.totalCompiles > 0,
              lastCompileTime: status.lastCompileTime
                ? new Date(status.lastCompileTime).toISOString()
                : null,
              lastSuccessTime: status.lastSuccessTime
                ? new Date(status.lastSuccessTime).toISOString()
                : null,
              compileDuration: status.compileDuration
                ? `${status.compileDuration}ms`
                : null,
              totalCompiles: status.totalCompiles,
              firstCompileTime: status.firstCompileTime
                ? new Date(status.firstCompileTime).toISOString()
                : null,
              errors: status.errors,
              warnings: status.warnings,
            },
            server: {
              nodeVersion: process.version,
              platform: os.platform(),
              arch: os.arch(),
              cpus: os.cpus().length,
              memory: {
                heapUsed: formatBytes(memUsage.heapUsed),
                heapTotal: formatBytes(memUsage.heapTotal),
                rss: formatBytes(memUsage.rss),
                external: formatBytes(memUsage.external),
              },
            },
            environment: process.env.NODE_ENV || "development",
          });
        }

        if (url === "/health/simple") {
          if (simpleStatus.state === "success") return writeText(res, 200, "OK");
          if (simpleStatus.state === "compiling")
            return writeText(res, 200, "COMPILING");
          if (simpleStatus.state === "idle") return writeText(res, 200, "IDLE");
          return writeText(res, 503, "ERROR");
        }

        if (url === "/health/ready") {
          if (simpleStatus.state === "success") {
            return writeJson(res, 200, { ready: true, state: simpleStatus.state });
          }
          return writeJson(res, 503, {
            ready: false,
            state: simpleStatus.state,
            reason:
              simpleStatus.state === "compiling"
                ? "Compilation in progress"
                : "Compilation failed",
          });
        }

        if (url === "/health/live") {
          return writeJson(res, 200, {
            alive: true,
            timestamp: new Date().toISOString(),
          });
        }

        if (url === "/health/errors") {
          return writeJson(res, 200, {
            errorCount: status.errors.length,
            warningCount: status.warnings.length,
            errors: status.errors,
            warnings: status.warnings,
            state: status.state,
          });
        }

        if (url === "/health/stats") {
          return writeJson(res, 200, {
            totalCompiles: status.totalCompiles,
            averageCompileTime:
              status.totalCompiles > 0
                ? `${Math.round(uptime / status.totalCompiles)}ms`
                : null,
            lastCompileDuration: status.compileDuration
              ? `${status.compileDuration}ms`
              : null,
            firstCompileTime: status.firstCompileTime
              ? new Date(status.firstCompileTime).toISOString()
              : null,
            serverUptime: formatDuration(uptime),
          });
        }

        return next();
      });
    },
  };
}
