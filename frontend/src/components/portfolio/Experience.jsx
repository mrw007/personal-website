import { SectionHeader } from "./shared";
import { ArrowUpRight, Building2, Briefcase, Landmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import React from "react";

const companyIcons = {
  JCDecaux: {
    src: "/assets/emergent/project-jcdecaux.png",
    alt: "JCDecaux logo",
    fallback: <Landmark className="text-bone-500" size={20} />,
  },
  "SFR Business": {
    src: "", // No logo available
    alt: "SFR logo",
    fallback: <Briefcase className="text-bone-500" size={20} />,
  },
  SIFAST: {
    src: "", // No logo available
    alt: "SIFAST logo",
    fallback: <Building2 className="text-bone-500" size={20} />,
  },
  "CHO Group": {
    src: "", // No logo available
    alt: "CHO Group logo",
    fallback: <Building2 className="text-bone-500" size={20} />,
  },
};

const roles = [
  {
    period: "2024 — Now",
    company: "JCDecaux",
    title: "Senior Frontend / Full-Stack Engineer",
    location: "Paris, France",
    summary:
      "Co-designed and built a shared Angular design system adopted by 8 product teams and used across 10+ internal applications — standardizing UX & behavior and reducing duplicated UI work. Led Angular 17 → 19 and Angular Material 2 → 3 upgrades in production, keeping features shipping while enforcing performance and accessibility standards.",
    tags: ["Angular 17–19", "Design System", "Material 2 → 3", "Java"],
  },
  {
    period: "2022 — 2024",
    company: "SFR Business",
    title: "Tech Lead / Angular Developer",
    location: "Paris, France",
    summary:
      "Led Angular development for MYPC — the self-service platform used by 1,000+ users. Cut time-to-resolution from 2 days to ~12 hours, lifted test coverage 60% → 70%, and ran the Angular 12 → 17 migration feature-by-feature while preserving PHP web views.",
    tags: ["Angular 12–17", "PWA", "SonarQube", "WCAG 2.1"],
  },
  {
    period: "2019 — 2022",
    company: "SIFAST",
    title: "Full-Stack Engineer (Angular / Java / Node)",
    location: "Sfax, Tunisia",
    summary:
      "Delivered 5+ enterprise HR and business modules in Angular 9–12 with NGXS/NGRX and OAuth2. Migrated the platform to a Single-SPA micro-frontend architecture mixing Angular and Vue.js, containerized with Docker and deployed on Kubernetes.",
    tags: ["Angular", "Single-SPA", "NGXS", "Kubernetes"],
  },
  {
    period: "2019 — 2020",
    company: "CHO Group · Cordon · Alea",
    title: "Angular Developer · Contract Work",
    location: "Remote · France / Tunisia",
    summary:
      "A run of client engagements early in my career — built partner & consumer traceability apps on IBM Trust Food blockchain (100+ batches, 5 languages), modernized a legacy Angular 5 health-and-safety platform, and shipped UI mockups adopted for a Django product.",
    tags: ["Angular 5", "Blockchain", "i18n", "Adobe XD"],
  },
];

export const Experience = () => {
  const [dotTops, setDotTops] = React.useState([]);
  const [lastCardBottom, setLastCardBottom] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const [useCssFallback, setUseCssFallback] = React.useState(false);
  const sectionRef = React.useRef(null);
  const timelineContainerRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const getLineMetrics = React.useMemo(() => {
    if (!dotTops.length) {
      return { top: 0, height: 0 };
    }

    const firstDotTop = dotTops[0] || 0;

    return {
      top: firstDotTop,
      height: Math.max(0, lastCardBottom - firstDotTop),
    };
  }, [dotTops, lastCardBottom]);

  const measureDots = React.useCallback(() => {
    if (!cardRefs.current.length || !timelineContainerRef.current) {
      return;
    }

    const containerTop =
      timelineContainerRef.current.getBoundingClientRect().top;

    const tops = cardRefs.current.map((ref) =>
      ref
        ? ref.getBoundingClientRect().top -
          containerTop +
          ref.offsetHeight * 0.1
        : 0,
    );

    const lastCard = cardRefs.current[cardRefs.current.length - 1];
    const measuredLastBottom = lastCard
      ? lastCard.getBoundingClientRect().bottom - containerTop
      : 0;

    setDotTops(tops);
    setLastCardBottom(measuredLastBottom);
  }, []);

  // Set timeline color and glow based on theme
  React.useEffect(() => {
    const root = document.documentElement;
    const isDark = globalThis.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    root.style.setProperty("--timeline-color", isDark ? "#E05D3A" : "#E85D2B");
    root.style.setProperty(
      "--timeline-glow",
      isDark ? "rgba(224,93,58,0.4)" : "rgba(232,93,43,0.25)",
    );
    root.style.setProperty(
      "--experience-left-glow",
      isDark ? "rgba(232, 93, 43, 0.06)" : "rgba(232, 93, 43, 0.03)",
    );
  }, []);

  React.useEffect(() => {
    measureDots();
    const onResize = () => measureDots();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureDots]);

  React.useEffect(() => {
    if (!("IntersectionObserver" in globalThis)) {
      setUseCssFallback(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      data-testid="experience-section"
      className={`relative overflow-hidden py-32 md:py-48 border-t border-white/5 ${useCssFallback ? "experience-js-fallback" : ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-[72%]"
        style={{
          background:
            "radial-gradient(85% 130% at 0% 45%, var(--experience-left-glow) 0%, rgba(232, 93, 43, 0) 68%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="04"
          label="Experience"
          title="Seven years across enterprise advertising, telecom, and the studio years that started it all."
        />
        <div
          ref={timelineContainerRef}
          className="relative"
          style={{ minHeight: 400 }}
        >
          {/* Timeline vertical line (desktop only) using absolute positioning */}
          {dotTops.length === roles.length && (
            <div
              className="hidden md:block absolute left-0 top-0 w-14"
              style={{ height: "100%", pointerEvents: "none" }}
              aria-hidden="true"
            >
              {/* Vertical line from center of first dot to bottom of last card, with fade at bottom */}
              {(() => {
                const lineScale =
                  useCssFallback || hasAnimated ? "scaleY(1)" : "scaleY(0)";

                return (
                  <div
                    className="experience-line-fallback"
                    style={{
                      position: "absolute",
                      left: 28,
                      top: getLineMetrics.top,
                      width: 2,
                      height: getLineMetrics.height,
                      background: "var(--timeline-color)",
                      borderRadius: 1,
                      zIndex: 0,
                      boxShadow:
                        "0 0 12px var(--timeline-glow), 0 0 28px rgba(232, 93, 43, 0.18)",
                      maskImage:
                        "linear-gradient(to bottom, black 85%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 85%, transparent 100%)",
                      transformOrigin: "top",
                      transform: lineScale,
                      transition: useCssFallback
                        ? "none"
                        : "transform 1.2s ease-out",
                    }}
                  />
                );
              })()}
              {/* Dots only (no horizontal connectors) */}
              {dotTops.map((top, i) => {
                const dotScale =
                  useCssFallback || hasAnimated ? "scale(1)" : "scale(0.5)";

                return (
                  <div
                    key={`${roles[i]?.company || "role"}-dot`}
                    className="experience-dot-fallback"
                    style={{
                      "--card-index": i,
                      position: "absolute",
                      left: 18,
                      top: top - 10,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "2px solid var(--timeline-color)",
                      background: "#181818",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: dotScale,
                      transition: useCssFallback
                        ? "none"
                        : `transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 200}ms`,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--timeline-color)",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <div className="space-y-12 md:space-y-16">
            {roles.map((r, i) => {
              const icon = companyIcons[r.company];
              const cardOpacity = useCssFallback || hasAnimated ? 1 : 0;
              const cardTranslateX =
                useCssFallback || hasAnimated
                  ? "translateX(0)"
                  : "translateX(24px)";

              return (
                <div key={r.company} className="relative flex">
                  {/* Empty gutter for timeline overlay */}
                  <div
                    className="hidden md:flex flex-col items-center"
                    style={{ width: "56px", zIndex: 2 }}
                    aria-hidden="true"
                  ></div>
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    data-testid={`experience-${r.company.toLowerCase().replace(/\s+/g, "-")}`}
                    className="card-surface group experience-card-fallback grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-5 md:px-8 md:ml-2 md:pl-8 w-full"
                    style={{
                      "--card-index": i,
                      marginLeft: 0,
                      minHeight: "120px",
                      opacity: cardOpacity,
                      transform: cardTranslateX,
                      transition: useCssFallback
                        ? "none"
                        : `opacity 0.5s ease-out ${i * 200}ms, transform 0.5s ease-out ${i * 200}ms`,
                    }}
                  >
                    <div className="col-span-12 md:col-span-2 font-mono text-xs text-bone-500 tracking-wider pt-2">
                      {r.period}
                    </div>
                    <div className="col-span-12 md:col-span-7">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-bone-50 tracking-tight flex items-center gap-2">
                          {/* Company icon/avatar */}
                          <span
                            className="inline-flex items-center justify-center"
                            style={{ width: 20, height: 20 }}
                          >
                            {icon?.src ? (
                              <Avatar className="h-5 w-5 bg-white/10">
                                <AvatarImage src={icon.src} alt={icon.alt} />
                                <AvatarFallback>{icon.fallback}</AvatarFallback>
                              </Avatar>
                            ) : (
                              icon?.fallback || (
                                <Building2
                                  className="text-bone-500"
                                  size={20}
                                />
                              )
                            )}
                          </span>
                          {r.title}
                        </h3>
                        <span className="text-bone-500">/</span>
                        <span className="font-display text-xl text-bone-300">
                          {r.company}
                        </span>
                      </div>
                      <p className="mt-3 text-bone-300 font-light leading-relaxed max-w-2xl">
                        {r.summary}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {r.tags.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-3 flex items-start md:justify-end pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-bone-500">
                          {r.location}
                        </span>
                        <ArrowUpRight
                          className="text-bone-500 group-hover:text-rust group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                          size={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
