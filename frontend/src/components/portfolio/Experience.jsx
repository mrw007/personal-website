import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight } from "lucide-react";

const roles = [
    {
        period: "2023 — Now",
        company: "Northwind Finance",
        title: "Staff Frontend Engineer",
        location: "Remote · Berlin",
        summary:
            "Leading the design-system rewrite for a multi-product fintech suite. Cut median LCP by 41% across 6 surfaces. Built a token pipeline shared across Angular, React Native, and email.",
        tags: ["Angular 18", "Signals", "Nx", "Storybook"],
    },
    {
        period: "2020 — 2023",
        company: "Atlas Health",
        title: "Senior Frontend Engineer",
        location: "Hybrid · Amsterdam",
        summary:
            "Architected the clinical workspace SPA used by 30k clinicians. Owned offline-first state, FHIR data layer, and the accessibility audit that passed WCAG 2.2 AA on first attempt.",
        tags: ["Angular", "RxJS", "NgRx", "PWA"],
    },
    {
        period: "2018 — 2020",
        company: "Loom & Lumber",
        title: "Frontend Engineer",
        location: "Lisbon",
        summary:
            "Migrated a legacy Backbone storefront to React. Introduced the company's first design tokens and Storybook practice. Shipped checkout that lifted conversion by 12%.",
        tags: ["React", "Redux", "Webpack"],
    },
    {
        period: "2016 — 2018",
        company: "Sparrow Studio",
        title: "Frontend Developer",
        location: "Lisbon",
        summary:
            "Boutique studio work: agency sites, editorial pieces, motion-driven landing pages. The school that taught me typography, easing curves, and how to defend a kerning decision.",
        tags: ["JS", "GSAP", "WebGL"],
    },
];

export const Experience = () => {
    return (
        <section
            id="work"
            data-testid="experience-section"
            className="relative py-28 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="03"
                    label="Experience"
                    title="Eight years across fintech, health-tech, commerce — and the boutique studio that started it all."
                />

                <div className="space-y-3">
                    {roles.map((r, i) => (
                        <Reveal
                            key={r.company}
                            delay={i * 0.05}
                        >
                            <a
                                href="#contact"
                                data-testid={`experience-${r.company.toLowerCase().replace(/\s+/g, "-")}`}
                                className="card-surface group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 px-5 md:px-8"
                            >
                                <div className="col-span-12 md:col-span-2 font-mono text-xs text-bone-500 tracking-wider pt-2">
                                    {r.period}
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <div className="flex items-baseline gap-3 flex-wrap">
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-bone-50 tracking-tight">
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
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
