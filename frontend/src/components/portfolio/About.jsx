import { SectionHeader, Reveal } from "./shared";

const facts = [
    { k: "Years", v: "8+" },
    { k: "Teams led", v: "4" },
    { k: "Design systems shipped", v: "3" },
    { k: "Lighthouse avg.", v: "98" },
];

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-28 md:py-40"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="01"
                    label="About"
                    title="I build interfaces that hold up under pressure — and a team that wants to keep shipping them."
                />

                <div className="grid grid-cols-12 gap-6 md:gap-10">
                    <Reveal
                        delay={0.05}
                        className="col-span-12 lg:col-span-7 space-y-6 text-bone-300 font-light text-lg leading-relaxed"
                    >
                        <p>
                            For nearly a decade I've been the person product
                            teams pull in when the UI gets serious — large
                            Angular monorepos, custom design systems, and the
                            messy hand-off between design intent and shipped
                            engineering.
                        </p>
                        <p>
                            I care about the boring parts: bundle budgets,
                            render performance, a11y trees, predictable state.
                            And I care about the unboring ones: motion that
                            makes a product feel alive, typography that holds a
                            page together, micro-interactions you only notice
                            when they're gone.
                        </p>
                        <p>
                            Most days I'm leading a small frontend team, writing
                            the hard pieces myself, and editing the shape of the
                            codebase so the next engineer moves faster than the
                            last one did.
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
                                Leading the design-system rebuild for a B2B
                                fintech platform — Angular 18, Signals, Storybook
                                & Chromatic, zero-runtime CSS. Mentoring 5
                                engineers across two timezones.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
