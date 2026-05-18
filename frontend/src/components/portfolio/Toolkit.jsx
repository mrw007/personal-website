import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader, Reveal } from "./shared";

const ICON = (slug) => `https://cdn.simpleicons.org/${slug}`;

const categories = [
    {
        label: "Frontend",
        accent: "Languages, frameworks & UI",
        tools: [
            { name: "Angular", slug: "angular" },
            { name: "TypeScript", slug: "typescript" },
            { name: "RxJS", slug: "reactivex" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css" },
            { name: "Angular Material", slug: "materialdesign" },
            { name: "Vue.js", slug: "vuedotjs" },
        ],
    },
    {
        label: "Architecture",
        accent: "State, structure & scale",
        tools: [
            { name: "NGRX", slug: "ngrx" },
            { name: "Signals", slug: "angular" },
            { name: "Single-SPA", slug: "singlespa" },
            { name: "Design Systems", slug: "storybook" },
            { name: "OAuth2", slug: "auth0" },
            { name: "GraphQL", slug: "graphql" },
            { name: "Webpack", slug: "webpack" },
            { name: "Standalone", slug: "angular" },
        ],
    },
    {
        label: "Backend & APIs",
        accent: "Java, Node & data",
        tools: [
            { name: "Java", slug: "openjdk/ffffff" },
            { name: "Spring Boot", slug: "spring" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Express", slug: "express/ffffff" },
            { name: "REST", slug: "postman" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "PHP", slug: "php" },
        ],
    },
    {
        label: "Quality & DevOps",
        accent: "Ship, test & deploy",
        tools: [
            { name: "Docker", slug: "docker" },
            { name: "Kubernetes", slug: "kubernetes" },
            { name: "GitLab CI", slug: "gitlab" },
            { name: "Jenkins", slug: "jenkins" },
            { name: "SonarQube", slug: "sonarqube" },
            { name: "ESLint", slug: "eslint" },
            { name: "Karma", slug: "karma" },
            { name: "GitHub", slug: "github/ffffff" },
        ],
    },
];

export const Toolkit = () => {
    const [i, setI] = useState(0);
    const cat = categories[i];

    const go = (d) =>
        setI((p) => (p + d + categories.length) % categories.length);

    return (
        <section
            id="toolkit"
            data-testid="toolkit-section"
            className="relative py-20 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="03"
                    label="Toolkit"
                    title="Every shipped project was built with a tight, intentional set of tools."
                />

                <Reveal>
                    <div
                        className="card-surface relative px-6 sm:px-10 md:px-16 py-12 md:py-16"
                        data-testid="toolkit-card"
                    >
                        {/* Top meta row */}
                        <div className="flex items-center justify-between mb-10">
                            <div className="font-mono text-xs tracking-[0.18em] text-rust">
                                {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
                            </div>
                            <div className="hidden sm:block overline">
                                {cat.accent}
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => go(-1)}
                                    data-testid="toolkit-prev"
                                    aria-label="Previous category"
                                    className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-rust transition-colors"
                                >
                                    <ChevronLeft size={16} className="text-bone-300" />
                                </button>
                                <button
                                    onClick={() => go(1)}
                                    data-testid="toolkit-next"
                                    aria-label="Next category"
                                    className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-rust transition-colors"
                                >
                                    <ChevronRight size={16} className="text-bone-300" />
                                </button>
                            </div>
                        </div>

                        {/* Animated category content */}
                        <div className="min-h-[360px] md:min-h-[420px] flex flex-col items-center justify-center text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={cat.label}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="w-full"
                                >
                                    <h3
                                        className="font-display text-4xl md:text-6xl font-black tracking-[-0.03em] text-bone-50 mb-10"
                                        data-testid="toolkit-category-title"
                                    >
                                        {cat.label}
                                    </h3>

                                    <div className="grid grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto">
                                        {cat.tools.map((t, idx) => (
                                            <motion.div
                                                key={t.name}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.08 + idx * 0.04,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="group flex flex-col items-center gap-2.5"
                                                data-testid={`toolkit-icon-${t.slug.split("/")[0]}`}
                                            >
                                                <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl glass flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                                                    <img
                                                        src={ICON(t.slug)}
                                                        alt={t.name}
                                                        loading="lazy"
                                                        className="h-7 w-7 md:h-8 md:w-8 object-contain"
                                                        onError={(e) => {
                                                            e.currentTarget.style.opacity = "0.4";
                                                        }}
                                                    />
                                                </div>
                                                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-300 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {t.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dot pagination */}
                        <div className="flex items-center justify-center gap-2 mt-10">
                            {categories.map((c, idx) => (
                                <button
                                    key={c.label}
                                    onClick={() => setI(idx)}
                                    data-testid={`toolkit-dot-${idx}`}
                                    aria-label={`Go to ${c.label}`}
                                    className={`h-1.5 rounded-full transition-all duration-400 ${
                                        idx === i
                                            ? "w-8 bg-rust"
                                            : "w-1.5 bg-white/15 hover:bg-white/30"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
