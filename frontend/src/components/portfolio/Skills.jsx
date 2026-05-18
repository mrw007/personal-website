import { SectionHeader, Reveal } from "./shared";
import {
    Code2,
    Layers,
    Gauge,
    Component,
    Workflow,
    Accessibility,
} from "lucide-react";

export const Skills = () => {
    return (
        <section
            id="skills"
            data-testid="skills-section"
            className="relative py-32 md:py-48 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="02"
                    label="Capabilities"
                    title="A frontend practice built around architecture, system thinking, and the details that ship."
                />

                {/* Bento grid */}
                <div className="grid grid-cols-12 grid-rows-[repeat(4,minmax(180px,auto))] gap-3 md:gap-4">
                    <Reveal className="col-span-12 md:col-span-7 row-span-2 card-surface p-8 md:p-10 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                            <Component className="text-rust" size={28} />
                            <span className="overline">primary</span>
                        </div>
                        <div>
                            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone-50 mb-3">
                                Angular Architecture
                            </h3>
                            <p className="text-bone-300 font-light max-w-lg">
                                Angular 17 → 19 migrations with standalone
                                components and signals. Clean separation of
                                feature / data / UI. Resilient state with NGXS
                                & NGRX. Component contracts that survive
                                redesigns.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal
                        delay={0.05}
                        className="col-span-12 md:col-span-5 row-span-1 card-surface p-7 flex flex-col justify-between"
                    >
                        <Layers className="text-rust" size={24} />
                        <div>
                            <h3 className="font-display text-xl font-bold text-bone-50">
                                Design Systems
                            </h3>
                            <p className="text-sm text-bone-300 font-light mt-2">
                                40+ shared components adopted across 8 teams.
                                Angular Material 2 → 3, token pipelines,
                                governance that scales.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal
                        delay={0.1}
                        className="col-span-6 md:col-span-3 row-span-1 card-surface p-6 flex flex-col justify-between"
                    >
                        <Gauge className="text-rust" size={22} />
                        <div>
                            <h3 className="font-display text-lg font-bold text-bone-50">
                                Performance
                            </h3>
                            <p className="text-xs text-bone-300 font-light mt-1.5 leading-relaxed">
                                Lazy loading,
                                <br />
                                code splitting,
                                <br />
                                AOT compilation.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal
                        delay={0.15}
                        className="col-span-6 md:col-span-2 row-span-1 card-surface p-6 flex flex-col justify-between"
                    >
                        <Code2 className="text-rust" size={22} />
                        <div>
                            <h3 className="font-display text-lg font-bold text-bone-50">
                                Type Safety
                            </h3>
                            <p className="text-xs text-bone-300 font-light mt-1.5">
                                Strict TS, signals, RxJS streams.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal
                        delay={0.05}
                        className="col-span-12 md:col-span-5 row-span-1 card-surface p-7 flex flex-col justify-between"
                    >
                        <Workflow className="text-rust" size={22} />
                        <div>
                            <h3 className="font-display text-xl font-bold text-bone-50">
                                Technical Leadership
                            </h3>
                            <p className="text-sm text-bone-300 font-light mt-2">
                                Cross-team standards, mentoring juniors,
                                writing the specs, defending the trade-offs.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal
                        delay={0.1}
                        className="col-span-12 md:col-span-7 row-span-1 card-surface p-7 flex items-center gap-6"
                    >
                        <Accessibility className="text-rust shrink-0" size={28} />
                        <div>
                            <h3 className="font-display text-xl font-bold text-bone-50 mb-1">
                                Accessibility & Quality
                            </h3>
                            <p className="text-sm text-bone-300 font-light">
                                WCAG 2.1 compliance, ARIA & keyboard
                                navigation, automated coverage lifted 60% → 70%
                                with SonarQube, Karma & Jasmine.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
