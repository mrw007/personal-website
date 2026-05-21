import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, FileDown } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const HERO_IMG = `${BASE_URL}assets/emergent/hero-texture.png`;

const PORTRAIT = `${BASE_URL}wahib-cutout.png`;

export const Hero = memo(() => {
  const portraitRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0,
      ty = 0;
    const onMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      tx = (e.clientX - w / 2) / w; // -0.5 .. 0.5
      ty = (e.clientY - h / 2) / h;
      if (!raf) {
        raf = requestAnimationFrame(apply);
      }
    };
    const apply = () => {
      raf = 0;
      if (portraitRef.current)
        portraitRef.current.style.transform = `translate3d(${tx * -22}px, ${ty * -16}px, 0)`;
      if (textureRef.current)
        textureRef.current.style.transform = `translate3d(${tx * 14}px, ${ty * 10}px, 0)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[calc(100vh-60px)] flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Texture background */}
      <div
        ref={textureRef}
        className="absolute inset-0 opacity-40 pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 0%, transparent 75%)",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      {/* Floating cutout portrait — anchored to the centered content
                container (max-w-7xl) so it sits next to the text on wide screens */}
      <div className="hidden lg:block absolute inset-0 z-[5] pointer-events-none">
        <div className="relative max-w-[86rem] mx-auto h-full px-5 md:px-8 xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute right-2 xl:right-0 top-[14%] xl:top-[12%] select-none"
            data-testid="hero-portrait"
          >
            <div
              ref={portraitRef}
              className="will-change-transform"
              style={{
                transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="relative float-gentle">
                {/* Soft rust glow halo behind */}
                <div
                  className="absolute inset-0 -z-10 blur-3xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(224,93,58,0.50) 0%, rgba(224,93,58,0.18) 35%, transparent 65%)",
                    transform: "scale(1.18)",
                  }}
                />
                <img
                  src={PORTRAIT}
                  alt="Wahib Kerkeni — Senior Frontend Engineer"
                  loading="lazy"
                  decoding="async"
                  className="block h-[420px] xl:h-[500px] 2xl:h-[540px] w-auto portrait-duotone"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.6) 80%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.6) 80%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900 pointer-events-none" />

      {/* Old polaroid removed — replaced by cutout above */}

      <div className="relative z-20 max-w-[86rem] mx-auto px-5 md:px-8 xl:px-10 w-full grid grid-cols-12 gap-6 2xl:-mt-8">
        {/* Status line */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="col-span-12 mb-10 md:mb-12 xl:mb-14"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse shrink-0" />
            <span className="font-mono text-xs md:text-sm text-bone-300 tracking-wide">
              Based in Dublin (Stamp 1G) · Open to Senior Frontend / Tech Lead
              roles in Ireland
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="col-span-12 lg:col-span-7 pr-2 lg:pr-10 xl:pr-16"
        >
          <h1
            className="font-display text-[clamp(3rem,11vw,8.75rem)] font-black tracking-[-0.04em] leading-[0.9] text-bone-50"
            data-testid="hero-heading"
          >
            Frontend.
            <br />
            <span className="text-bone-50">
              Architecture<span className="text-rust">.</span>
            </span>
            <br />
            <span className="italic font-medium tracking-[-0.02em] text-bone-300">
              Craft<span className="cursor-blink">_</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-12 lg:col-span-7 mt-12 md:mt-14 flex flex-col gap-9"
        >
          <p className="text-lg md:text-xl text-bone-300 font-light leading-relaxed max-w-2xl text-justify">
            I build and modernize frontend platforms that have to hold up under
            scale, with deep experience in{" "}
            <span className="text-bone-50 font-semibold">Angular</span> and the{" "}
            <span className="text-bone-50 font-semibold">Design Systems</span>{" "}
            that keep teams aligned as products grow. Over 7+ years, I've led
            migrations and design-system adoption at{" "}
            <span className="text-bone-50 font-semibold">JCDecaux</span> and{" "}
            <span className="text-bone-50 font-semibold">SFR Business</span>,
            supporting 8 teams and 10+ enterprise applications.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="btn-primary group"
              data-testid="hero-cta-projects"
            >
              Learn about my work
              <ArrowDownRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href={`${BASE_URL}Wahib_KerkenI_Senior_Angular_Engineer.pdf`}
              download="Wahib_KerkenI_Senior_Angular_Engineer.pdf"
              className="btn-secondary group"
              data-testid="hero-cta-cv"
            >
              Download CV
              <FileDown
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export const TechStrip = () => (
  <div
    className="relative z-10 py-5 overflow-hidden border-y border-white/5"
    data-testid="tech-strip"
    aria-label="Tech stack"
    style={{
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    }}
  >
    <div className="flex marquee-track gap-10 whitespace-nowrap will-change-transform">
      {[...Array(2)].map((_, copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 items-center gap-10 pr-10 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-bone-300"
        >
          <span>Angular 17–19</span>
          <span className="text-rust">◆</span>
          <span>TypeScript</span>
          <span className="text-rust">◆</span>
          <span>Signals &amp; RxJS</span>
          <span className="text-rust">◆</span>
          <span>Design Systems</span>
          <span className="text-rust">◆</span>
          <span>Micro-frontends · Single-SPA</span>
          <span className="text-rust">◆</span>
          <span>Angular Material 2 → 3</span>
          <span className="text-rust">◆</span>
          <span>Java / Spring Boot</span>
          <span className="text-rust">◆</span>
          <span>WCAG 2.1</span>
          <span className="text-rust">◆</span>
        </div>
      ))}
    </div>
  </div>
);
