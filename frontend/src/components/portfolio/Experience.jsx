import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight } from "lucide-react";

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
    return (
        <section
            id="work"
            data-testid="experience-section"
            className="relative py-32 md:py-48 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="04"
                    label="Experience"
                    title="Seven years across enterprise advertising, telecom, and the studio years that started it all."
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
