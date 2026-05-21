import { SectionHeader } from "./shared";
import PropTypes from "prop-types";
import { ArrowUpRight, GraduationCap } from "lucide-react";

import React from "react";

const withBaseUrl = (path) =>
  `${import.meta.env.BASE_URL || "/"}${path.replace(/^\//, "")}`;

const educationIcons = {
  "Higher Institute of Computer Science and Multimedia of Sfax": {
    src: withBaseUrl("/assets/companies/isims.jpg"),
    alt: "ISIMS logo",
    fallback: <GraduationCap className="text-bone-500" size={20} />,
  },
};

const educationRoles = [
  {
    period: "2019",
    company: "Higher Institute of Computer Science and Multimedia of Sfax",
    title: "Engineering Degree in Applied Sciences and Technologies",
    location: "Sfax, Tunisia",
    summary:
      "Built a strong foundation in software engineering, computer science, and application development. This degree shaped the systems thinking behind my current work in frontend architecture, design systems, and scalable product engineering.",
    tags: [
      "software engineering",
      "computer science",
      "application development",
      "systems thinking",
    ],
  },
  {
    period: "2016",
    company: "Higher Institute of Computer Science and Multimedia of Sfax",
    title: "Bachelor's Degree in Fundamental Sciences",
    location: "Sfax, Tunisia",
    summary:
      "Developed core knowledge in mathematics, scientific reasoning, and analytical problem-solving, which continues to support how I approach engineering rigor, architecture decisions, and complex technical challenges.",
    tags: [
      "fundamental sciences",
      "mathematics",
      "analytical thinking",
      "problem solving",
    ],
  },
];

const TimelineSection = ({ section }) => {
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
      id={section.id}
      data-testid={section.testId}
      className={`relative overflow-hidden py-32 md:py-48 border-t border-white/5 ${
        useCssFallback ? "experience-js-fallback" : ""
      }`}
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
          index={section.header.index}
          label={section.header.label}
          title={section.header.title}
        />
        <div
          ref={timelineContainerRef}
          className="relative"
          style={{ minHeight: 400 }}
        >
          {dotTops.length === section.items.length && (
            <div
              className="hidden md:block absolute left-0 top-0 w-14"
              style={{ height: "100%", pointerEvents: "none" }}
              aria-hidden="true"
            >
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
              {dotTops.map((top, i) => {
                const dotScale =
                  useCssFallback || hasAnimated ? "scale(1)" : "scale(0.5)";

                return (
                  <div
                    key={`${section.items[i]?.company || "item"}-dot`}
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
                        : `transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                            i * 200
                          }ms`,
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
            {section.items.map((item, i) => {
              const icon = section.iconMap[item.company];
              const cardOpacity = useCssFallback || hasAnimated ? 1 : 0;
              const cardTranslateX =
                useCssFallback || hasAnimated
                  ? "translateX(0)"
                  : "translateX(24px)";

              return (
                <div
                  key={`${item.company}-${item.period}-${item.title}`}
                  className="relative flex"
                >
                  <div
                    className="hidden md:flex flex-col items-center"
                    style={{ width: "56px", zIndex: 2 }}
                    aria-hidden="true"
                  />
                  <div
                    ref={(el) => (cardRefs.current[i] = el)}
                    data-testid={`${section.id}-${item.company
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="card-surface group experience-card-fallback grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-5 md:px-8 md:ml-2 md:pl-8 w-full"
                    style={{
                      "--card-index": i,
                      marginLeft: 0,
                      minHeight: "120px",
                      opacity: cardOpacity,
                      transform: cardTranslateX,
                      transition: useCssFallback
                        ? "none"
                        : `opacity 0.5s ease-out ${i * 200}ms, transform 0.5s ease-out ${
                            i * 200
                          }ms`,
                    }}
                  >
                    <div className="col-span-12 md:col-span-1 font-mono text-xs text-bone-500 tracking-wider pt-2">
                      {item.period}
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-bone-50 tracking-tight flex items-center gap-2">
                          <span
                            className="inline-flex items-center justify-center"
                            style={{ width: 20, height: 20 }}
                          >
                            {icon?.src ? (
                              <img
                                src={icon.src}
                                alt={icon.alt || item.company}
                                className="h-5 w-5 rounded bg-white/10 object-contain"
                                style={{ borderRadius: 6, background: '#fff', padding: 2 }}
                              />
                            ) : (
                              icon?.fallback || (
                                <GraduationCap className="text-bone-500" size={20} />
                              )
                            )}
                          </span>
                          {item.title}
                        </h3>
                        <span className="text-bone-500">/</span>
                        <span className="font-display text-xl text-bone-300">
                          {item.company}
                        </span>
                      </div>
                      <p className="mt-3 text-bone-300 font-light leading-relaxed max-w-2xl text-justify">
                        {item.summary}
                      </p>
                      {item.tags?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="tech-badge">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-span-12 md:col-span-2 flex items-start md:justify-end pt-1">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-bone-500">
                          {item.location}
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

export const Education = () => {
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

  return (
    <TimelineSection
      section={{
        id: "education",
        testId: "education-section",
        header: {
          index: "05",
          label: "Education",
          title:
            "Academic foundation that informs my engineering decisions in production work.",
        },
        items: educationRoles,
        iconMap: educationIcons,
      }}
    />
  );
};

TimelineSection.propTypes = {
  section: PropTypes.shape({
    id: PropTypes.string.isRequired,
    testId: PropTypes.string.isRequired,
    header: PropTypes.shape({
      index: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        period: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string,
        summary: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
    ).isRequired,
    iconMap: PropTypes.object.isRequired,
  }).isRequired,
};
