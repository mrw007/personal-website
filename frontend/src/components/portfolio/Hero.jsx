import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const HERO_IMG =
    "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/f51c889ef451d25942738638d76069454cbd708f35b10661438b112de66e2b82.png";

export const Hero = () => {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-screen flex items-end pt-32 pb-16 overflow-hidden"
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

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-12 gap-6">
                {/* Status line */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="col-span-12 mb-12"
                >
                    <div className="glass inline-flex items-center gap-3 px-4 py-2 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse" />
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

                {/* Meta column */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="hidden lg:flex col-span-12 lg:col-span-3 lg:col-start-10 lg:justify-self-end flex-col gap-4 self-end pb-4"
                >
                    <div className="glass p-5" style={{ borderRadius: 20 }}>
                        <div className="overline mb-2">Index</div>
                        <div className="font-mono text-xs text-bone-300 leading-relaxed">
                            01 · About
                            <br />
                            02 · Skills
                            <br />
                            03 · Toolkit
                            <br />
                            04 · Experience
                            <br />
                            05 · Projects
                            <br />
                            06 · Writing
                            <br />
                            07 · Contact
                        </div>
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
