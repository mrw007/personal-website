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
            className="relative py-28 md:py-40 border-t border-white/5"
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
                                Frontend Architecture
                            </h3>
                            <p className="text-bone-300 font-light max-w-lg">
                                Monorepo strategy with Nx, module federation,
                                clean separation of feature / data / UI layers,
                                resilient state with Signals & NgRx.
                                Component contracts that survive redesigns.
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
                                Token pipelines, headless primitives, semantic
                                theming. Figma → code with zero drift.
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
                                Core Web Vitals,
                                <br />
                                bundle budgets,
                                <br />
                                CDN-aware code paths.
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
                                Strict TS, branded types, zod at the edge.
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
                                ADRs, design reviews, hiring loops, and the kind
                                of mentorship that compounds.
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
                                Accessibility & Motion
                            </h3>
                            <p className="text-sm text-bone-300 font-light">
                                WCAG 2.2 AA as a default, keyboard-first focus
                                management, prefers-reduced-motion respected
                                everywhere.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
