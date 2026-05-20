import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const projects = [
    {
        n: "01",
        title: "JCDecaux Design System",
        client: "JCDecaux · Internal Platform",
        year: "2024",
        image:
            `${BASE_URL}assets/emergent/project-jcdecaux.png`,
        summary:
            "A reusable Angular design system adopted by 8 teams across 10+ mission-critical enterprise applications. 40+ shared components, standardized behavior, and a governance model that survived the Angular 17 → 19 and Material 2 → 3 migrations.",
        tags: ["Angular 17–19", "Material 3", "Signals", "Standalone"],
    },
    {
        n: "02",
        title: "MYPC Self-Service Platform",
        client: "SFR Business · 1,000+ users",
        year: "2023",
        image:
            `${BASE_URL}assets/emergent/project-mypc.png`,
        summary:
            "Rebuilt access-right and incident-management workflows into a PWA-first experience. Cut time-to-resolution from 2 days to ~12 hours, lifted automated coverage from 60% to 70%, and ran the Angular 12 → 17 migration feature-by-feature beside live PHP web views.",
        tags: ["Angular 12–17", "PWA", "RxJS", "WCAG 2.1"],
    },
    {
        n: "03",
        title: "Single-SPA Micro-Frontend Migration",
        client: "SIFAST · Enterprise HR Suite",
        year: "2021",
        image:
            `${BASE_URL}assets/emergent/project-single-spa.png`,
        summary:
            "Migrated a monolithic Angular platform to a Single-SPA micro-frontend architecture mixing Angular and Vue.js modules. Containerized with Docker and deployed on Kubernetes, unblocking parallel team workflows and release cadences.",
        tags: ["Single-SPA", "Angular", "Vue.js", "Kubernetes"],
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-32 md:py-48 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="05"
                    label="Selected Work"
                    title="Three engagements that shaped how I think about Angular at scale, design systems, and migration."
                />

                <div className="space-y-20 md:space-y-32">
                    {projects.map((p, i) => {
                        const reverse = i % 2 === 1;
                        return (
                            <Reveal
                                key={p.title}
                                delay={0.05}
                                className="grid grid-cols-12 gap-6 md:gap-10 items-center"
                            >
                                <div
                                    className={`col-span-12 lg:col-span-7 ${
                                        reverse ? "lg:order-2" : ""
                                    }`}
                                >
                                    <a
                                        href="#contact"
                                        data-testid={`project-${p.n}`}
                                        className="group block relative overflow-hidden card-surface aspect-[4/3]"
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/80 via-transparent to-transparent" />
                                        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                                            <span className="font-mono text-xs text-bone-300 tracking-[0.22em]">
                                                {p.n}
                                            </span>
                                            <span className="font-mono text-xs text-bone-300">
                                                {p.year}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-500" style={{background:"linear-gradient(135deg, rgba(224,93,58,0.95) 0%, rgba(199,75,42,0.95) 100%)", borderColor:"rgba(255,255,255,0.25)"}}>
                                            <ArrowUpRight size={20} className="text-white" />
                                        </div>
                                    </a>
                                </div>

                                <div
                                    className={`col-span-12 lg:col-span-5 ${
                                        reverse ? "lg:order-1" : ""
                                    }`}
                                >
                                    <div className="overline mb-4">{p.client}</div>
                                    <h3 className="font-display text-3xl md:text-4xl font-black tracking-[-0.02em] text-bone-50 leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="mt-5 text-bone-300 font-light leading-relaxed">
                                        {p.summary}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="tech-badge">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <a
                                        href="#contact"
                                        className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-50 hover:text-rust group transition-colors"
                                        data-testid={`project-cta-${p.n}`}
                                    >
                                        Read case study
                                        <ArrowUpRight
                                            size={14}
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </a>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
