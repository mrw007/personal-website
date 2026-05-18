import { SectionHeader, Reveal } from "./shared";

const facts = [
    { k: "Years", v: "7+" },
    { k: "Teams supported", v: "8" },
    { k: "Apps modernized", v: "10+" },
    { k: "DS components", v: "40+" },
];

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-32 md:py-48"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="01"
                    label="About"
                    title="I build Angular platforms that hold up under scale — and lead the teams that keep shipping them."
                />

                <div className="grid grid-cols-12 gap-6 md:gap-10">
                    <Reveal
                        delay={0.05}
                        className="col-span-12 lg:col-span-7 space-y-6 text-bone-300 font-light text-lg leading-relaxed"
                    >
                        <p>
                            For 7+ years I've been the engineer product teams pull
                            in when the frontend gets serious — large Angular
                            applications, design systems shared across teams,
                            and the messy migrations between major framework
                            versions.
                        </p>
                        <p>
                            At JCDecaux I architected a design system adopted
                            by 8 teams and drove the Angular 17 → 19 migration
                            across 10+ mission-critical platforms. At SFR
                            Business I led a small team rebuilding the MYPC
                            self-service experience used by 1,000+ enterprise
                            users — reducing time-to-resolution from 2 days to
                            12 hours.
                        </p>
                        <p>
                            I care about the boring parts: change detection,
                            bundle budgets, AOT, a11y trees. And the unboring
                            ones: standalone components, signals-first state,
                            and a design language designers and engineers
                            actually agree on.
                        </p>
                    </Reveal>

                    <Reveal
                        delay={0.15}
                        className="col-span-12 lg:col-span-5"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {facts.map((f) => (
                                <div
                                    key={f.k}
                                    className="card-surface p-6 md:p-8"
                                    data-testid={`fact-${f.k.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                    <div className="font-display font-black text-4xl md:text-5xl tracking-tight text-bone-50">
                                        {f.v}
                                    </div>
                                    <div className="overline mt-2">{f.k}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 card-surface p-6">
                            <div className="overline mb-3">Currently</div>
                            <p className="font-mono text-xs text-bone-300 leading-relaxed">
                                Senior Frontend / Full-Stack at JCDecaux —
                                Paris. Based in Dublin with Stamp 1G work
                                authorization. Open to senior frontend, staff,
                                or tech-lead roles across the EU / Ireland.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
