import { SectionHeader } from "./shared";
import { ArrowUpRight, Building2, Briefcase, Landmark } from "lucide-react";
import React from "react";

const withBaseUrl = (path) =>
  `${import.meta.env.BASE_URL || "/"}${path.replace(/^\//, "")}`;

const companyIcons = {
  JCDecaux: {
    src: withBaseUrl("/assets/companies/jcdecaux.jpeg"),
    alt: "JCDecaux logo",
    fallback: <Landmark className="text-bone-500" size={20} />,
  },
  "SFR Business": {
    src: withBaseUrl("/assets/companies/SFR.png"),
    alt: "SFR logo",
    fallback: <Briefcase className="text-bone-500" size={20} />,
  },
  SIFAST: {
    src: withBaseUrl("/assets/companies/sifast.jpg"),
    alt: "SIFAST logo",
    fallback: <Building2 className="text-bone-500" size={20} />,
  },
  "CHO Group": {
    src: withBaseUrl("/assets/companies/cho.png"),
    alt: "CHO Group logo",
    fallback: <Building2 className="text-bone-500" size={20} />,
  },
  "Alea-Prévention": {
    src: withBaseUrl("/assets/companies/alea.jpg"),
    alt: "Alea-Prévention logo",
    fallback: <Building2 className="text-bone-500" size={20} />,
  },
  "Cordon Electronics": {
    src: withBaseUrl("/assets/companies/cordon.jpg"),
    alt: "Cordon Electronics logo",
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
      "I helped shape the frontend foundation behind a portfolio of internal platforms used across 8 teams and 10+ enterprise applications. I co-built a shared design system, drove Angular 17-19 migrations, and set engineering standards that made the stack easier to evolve without slowing delivery.",
    tags: [
      "angular 17–19",
      "design system",
      "material 2 → 3",
      "typescript",
      "signals",
      "java",
      "performance",
    ],
  },
  {
    period: "2022 — 2024",
    company: "SFR Business",
    title: "Tech Lead / Angular Developer",
    location: "Paris, France",
    summary:
      "At SFR Business, I worked on MYPC, a platform used by 1,000+ users to manage access rights and incident workflows. I helped turn it into a faster self-service experience, cutting resolution time from around 2 days to about 12 hours while improving quality, accessibility, and the migration path from Angular 12 to 17.",
    tags: [
      "angular 12–17",
      "pwa",
      "material 2 → 3",
      "sonarqube",
      "wcag 2.1",
      "tech lead",
      "karma",
      "ngrx",
    ],
  },
  {
    period: "2019 — 2022",
    company: "SIFAST",
    title: "Full-Stack Engineer",
    location: "Sfax, Tunisia",
    summary:
      "At SIFAST, I worked across several client-facing products in HR, business workflows, traceability, health and safety, and e-commerce UX. I built and modernized Angular-based platforms, helped move the architecture toward micro-frontends with Single-SPA, and supported delivery across a stack that was becoming more modular, portable, and easier to evolve. Client work included Alea-Prévention, CHO Group, and Cordon Electronics.",
    tags: [
      "angular",
      "single-spa",
      "ngrx",
      "react",
      "vue.js",
      "kubernetes",
      "spring boot",
      "oauth2",
      "micro-frontends",
    ],
  },
  {
    period: "2019 — 2020",
    company: "CHO Group",
    title: "Angular Developer",
    location: "Remote · Tunisia",
    summary:
      "Client project delivered through SIFAST for an olive-product traceability platform. I helped build a mobile-first, multilingual experience around partner access and blockchain-backed traceability across 100+ batches.",
    tags: ["angular", "blockchain", "i18n", "rest apis"],
  },
  {
    period: "2020",
    company: "Alea-Prévention",
    title: "Angular Developer",
    location: "Remote · France",
    summary:
      "Client project delivered through SIFAST for a French health and safety platform. I helped stabilize a legacy Angular 5 application, resolve production issues, and deliver improvements that made compliance workflows more reliable for end users.",
    tags: ["angular 5", "health and safety"],
  },
  {
    period: "2019",
    company: "Cordon Electronics",
    title: " UI/UX Design Engineer",
    location: "Remote · France",
    summary:
      "Client project delivered through SIFAST for an e-commerce product. I designed responsive mockups and user flows in Adobe XD that gave the product a clearer interface structure and a stronger base for implementation.",
    tags: ["ui/ux design", "adobe xd", "responsive design"],
  },
];

export const Experience = () => {
  // On mobile viewports, skip reveal animation entirely — cards must be visible immediately.
  // The IntersectionObserver threshold approach fails when the section is taller than the
  // viewport (threshold: 0.25 can never be reached), causing all cards to stay at opacity:0.
  const isMobile =
    globalThis.window !== undefined && globalThis.window.innerWidth < 768;

  const [dotTops, setDotTops] = React.useState([]);
  const [lastCardBottom, setLastCardBottom] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(isMobile);
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

  // Keep timeline colors in sync with the app's class-based theme toggle.
  React.useEffect(() => {
    const root = document.documentElement;
    const applyThemeVars = () => {
      const isLight = root.classList.contains("light");
      root.style.setProperty(
        "--timeline-color",
        isLight ? "#E85D2B" : "#E05D3A",
      );
      root.style.setProperty(
        "--timeline-glow",
        isLight ? "rgba(232,93,43,0.25)" : "rgba(224,93,58,0.4)",
      );
      root.style.setProperty(
        "--experience-left-glow",
        isLight ? "rgba(232, 93, 43, 0.03)" : "rgba(232, 93, 43, 0.06)",
      );
      root.style.setProperty(
        "--timeline-dot-bg",
        isLight ? "#ffffff" : "#181818",
      );
    };

    applyThemeVars();

    const observer = new MutationObserver(applyThemeVars);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    measureDots();
    const onResize = () => measureDots();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measureDots]);

  React.useEffect(() => {
    // Mobile already starts with hasAnimated=true; skip observer setup entirely.
    if (isMobile) return;

    if (!("IntersectionObserver" in globalThis)) {
      setUseCssFallback(true);
      return;
    }

    // Use a low threshold (5%) so the observer fires even when the section is
    // taller than the viewport. rootMargin adds a small early-trigger buffer.
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Safety net: if the observer never fires within 2 s (e.g. element already
    // in view on page load but intersection entry was missed), force reveal.
    const fallbackTimer = setTimeout(() => {
      setHasAnimated(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isMobile]);

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
          title="From client delivery to enterprise platforms, a progression shaped by scale, architecture, and frontend craft."
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
                      background: "var(--timeline-dot-bg)",
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
                    {/* Period + Location grouped on mobile; period alone on desktop */}
                    <div className="col-span-12 md:col-span-2 font-mono text-xs text-bone-500 tracking-wider pt-2 flex items-center justify-between md:block">
                      <span>{r.period}</span>
                      <span className="md:hidden">{r.location}</span>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-xl md:text-3xl font-bold text-bone-50 tracking-tight flex items-center gap-2">
                          {/* Company icon/avatar */}
                          <span
                            className="inline-flex items-center justify-center shrink-0"
                            style={{ width: 20, height: 20 }}
                          >
                            {icon?.src ? (
                              <img
                                src={icon.src}
                                alt={icon.alt || r.company}
                                className="h-5 w-5 rounded bg-white/10 object-contain"
                                style={{
                                  borderRadius: 6,
                                  background: "#fff",
                                  padding: 2,
                                }}
                              />
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
                      <p className="mt-3 text-bone-300 font-light leading-relaxed max-w-2xl md:text-justify">
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
                    {/* Location column: hidden on mobile (shown inline with period above) */}
                    <div className="hidden md:flex md:col-span-2 items-start justify-end pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-bone-500">
                          {r.location}
                        </span>
                        {/* <ArrowUpRight
                          className="text-bone-500 group-hover:text-rust group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                          size={20}
                        /> */}
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
