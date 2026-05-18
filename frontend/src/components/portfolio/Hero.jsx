import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const HERO_IMG =
    "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/f51c889ef451d25942738638d76069454cbd708f35b10661438b112de66e2b82.png";

const PORTRAIT =
    "https://customer-assets.emergentagent.com/job_code-architect-44/artifacts/y9y0949k_1737141838807.jpeg";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen flex items-end pt-32 pb-40 md:pb-48 overflow-hidden"
        >
            {/* Texture background */}
            <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `url(${HERO_IMG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maskImage:
                        "radial-gradient(ellipse at 70% 40%, black 0%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at 70% 40%, black 0%, transparent 75%)",
                }}
            />
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900 pointer-events-none" />

            {/* Floating polaroid portrait — hidden on small screens */}
            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -8, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
                transition={{
                    duration: 1.1,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                    rotate: 0,
                    y: -6,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                }}
                className="hidden lg:block absolute z-20 right-12 xl:right-24 top-[18%] xl:top-[22%]"
                data-testid="hero-portrait"
            >
                <div
                    className="glass relative p-3 pb-12"
                    style={{
                        borderRadius: 24,
                        boxShadow:
                            "0 30px 80px -20px rgba(0,0,0,0.6), 0 10px 30px -10px rgba(224,93,58,0.25)",
                    }}
                >
                    <div className="relative w-[240px] xl:w-[280px] aspect-[4/5] overflow-hidden rounded-[14px]">
                        <img
                            src={PORTRAIT}
                            alt="Wahib Kerkeni"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Subtle warm grade overlay */}
                        <div
                            className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                            style={{
                                background:
                                    "linear-gradient(180deg, rgba(224,93,58,0.18) 0%, transparent 35%, transparent 70%, rgba(0,0,0,0.4) 100%)",
                            }}
                        />
                        {/* Mono ID strip */}
                        <div className="absolute top-3 left-3 right-3 flex items-start justify-between font-mono text-[9px] text-white/85 tracking-[0.2em] uppercase">
                            <span>WK · 01</span>
                            <span>// 2024</span>
                        </div>
                        {/* Crosshair corners */}
                        <span className="absolute top-2 left-2 h-3 w-3 border-l border-t border-white/40" />
                        <span className="absolute top-2 right-2 h-3 w-3 border-r border-t border-white/40" />
                        <span className="absolute bottom-2 left-2 h-3 w-3 border-l border-b border-white/40" />
                        <span className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-white/40" />
                    </div>
                    {/* Caption */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-bone-300">
                        <span>Wahib · Dublin</span>
                        <span className="text-rust">●</span>
                    </div>
                </div>
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-6">
                {/* Status line */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="col-span-12 mb-12"
                >
                    <div className="glass inline-flex items-center gap-2.5 pl-1 pr-4 py-1 rounded-full">
                        <span className="relative h-6 w-6 rounded-full overflow-hidden ring-1 ring-white/20">
                            <img
                                src={PORTRAIT}
                                alt="Wahib Kerkeni"
                                className="h-full w-full object-cover"
                            />
                        </span>
                        <span className="overline !text-bone-300">
                            Available · Dublin · Stamp 1G
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
                    className="col-span-12 lg:col-span-10"
                >
                    <h1
                        className="font-display text-[clamp(3rem,11vw,11rem)] font-black tracking-[-0.04em] leading-[0.86] text-bone-50"
                        data-testid="hero-heading"
                    >
                        Angular.
                        <br />
                        <span className="text-bone-50/90">
                            Architecture<span className="text-rust">.</span>
                        </span>
                        <br />
                        <span className="italic font-medium tracking-[-0.02em] text-bone-300">
                            Scale<span className="cursor-blink">_</span>
                        </span>
                    </h1>
                </motion.div>

                {/* Subtitle + CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="col-span-12 lg:col-span-7 mt-12 flex flex-col gap-8"
                >
                    <p className="text-lg md:text-xl text-bone-300 font-light leading-relaxed max-w-2xl">
                        I'm{" "}
                        <span className="text-bone-50 font-medium">
                            Wahib Kerkeni
                        </span>{" "}
                        — a senior frontend engineer with 7+ years building
                        scalable Angular platforms, leading design-system
                        adoption across teams, and modernizing enterprise apps
                        at companies like JCDecaux and SFR.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="btn-primary group"
                            data-testid="hero-cta-projects"
                        >
                            View Projects
                            <ArrowDownRight
                                size={16}
                                className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="btn-secondary group"
                            data-testid="hero-cta-contact"
                        >
                            Contact Me
                            <ArrowUpRight
                                size={16}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Bottom marquee — floating glass bar */}
            <div className="absolute bottom-6 left-4 right-4 md:left-12 md:right-12 z-10">
                <div className="glass py-3 overflow-hidden" style={{ borderRadius: 9999 }}>
                    <div className="flex marquee-track gap-12 whitespace-nowrap">
                        {[...Array(2)].map((_, i) => (
                            <div
                                key={i}
                                className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-300 px-6"
                            >
                                <span>Angular 17 — 19</span>
                                <span className="text-rust">◆</span>
                                <span>TypeScript</span>
                                <span className="text-rust">◆</span>
                                <span>Signals & RxJS</span>
                                <span className="text-rust">◆</span>
                                <span>Design Systems</span>
                                <span className="text-rust">◆</span>
                                <span>Micro-Frontends · Single-SPA</span>
                                <span className="text-rust">◆</span>
                                <span>Angular Material 2 → 3</span>
                                <span className="text-rust">◆</span>
                                <span>Java · Spring Boot · Node</span>
                                <span className="text-rust">◆</span>
                                <span>WCAG 2.1</span>
                                <span className="text-rust">◆</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
