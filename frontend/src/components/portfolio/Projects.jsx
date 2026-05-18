import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        n: "01",
        title: "Halcyon Design System",
        client: "Northwind Finance · Internal",
        year: "2024",
        image:
            "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/aa5ab2f18951a044de8a9774f09fad6908db0fe46c55faa836d49a9f8bb8077e.png",
        summary:
            "A token-driven design system spanning 240+ components across Angular and React Native, with a custom Figma plugin that keeps designers and code in sync.",
        tags: ["Angular", "Design Tokens", "Storybook", "Figma API"],
    },
    {
        n: "02",
        title: "Clinical Workspace v3",
        client: "Atlas Health",
        year: "2022",
        image:
            "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/79dcfa213f2cc10f8c3120673343759aee596ae66149c1f5d8ae98387c32f73d.png",
        summary:
            "Offline-first SPA used by 30,000 clinicians. Re-architected the FHIR data layer, introduced optimistic mutations, and shipped a WCAG 2.2 AA pass on first audit.",
        tags: ["Angular", "RxJS", "PWA", "FHIR"],
    },
    {
        n: "03",
        title: "Atlas Metrics Console",
        client: "Internal · Open Source",
        year: "2023",
        image:
            "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/d596a4e914b2a21e5e8a5c43e2fffffd33acc6b989c552ec837df9a4cd88b70f.png",
        summary:
            "Real-time observability console rendering 50k events/sec without dropping frames — built with virtual lists, WebGL charts and a custom scheduler.",
        tags: ["React", "WebGL", "RxJS", "Performance"],
    },
];

export const Projects = () => {
    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-28 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="04"
                    label="Selected Work"
                    title="Three projects that shaped how I think about scale, speed, and the surface."
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
                                        className="group block relative overflow-hidden border border-white/5 bg-ink-800 aspect-[4/3]"
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
