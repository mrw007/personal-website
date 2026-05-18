import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight } from "lucide-react";

const posts = [
    {
        date: "Nov 2025",
        readTime: "8 min",
        category: "Architecture",
        title: "Surviving an Angular 17 → 19 Migration Across 10 Apps",
        excerpt:
            "What I learned standardizing standalone components, signals, and lazy loading across a JCDecaux-scale enterprise estate — and the four rules that actually shipped.",
        image:
            "https://images.unsplash.com/photo-1609915189900-455ffd52e50f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwyfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlJTIwZGFyayUyMGNvZGluZ3xlbnwwfHx8fDE3NzkxMzkzNzJ8MA&ixlib=rb-4.1.0&q=85",
    },
    {
        date: "Oct 2025",
        readTime: "6 min",
        category: "Micro-Frontends",
        title: "Single-SPA in 2026 — A Sober Take",
        excerpt:
            "Mixing Angular and Vue.js inside one platform sounds clean on paper. Here's the decision tree I actually use before recommending it to a team.",
        image:
            "https://images.unsplash.com/photo-1546349851-64285be8e9fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGRhcmt8ZW58MHx8fHwxNzc5MTM5MzcyfDA&ixlib=rb-4.1.0&q=85",
    },
    {
        date: "Sep 2025",
        readTime: "5 min",
        category: "Design Systems",
        title: "Selling a Design System to 8 Teams (Without a Mandate)",
        excerpt:
            "Governance is a UX problem. Three patterns I've used to get adoption when you can't force the issue — and one mistake I keep watching teams make with semantic naming.",
        image:
            "https://static.prod-images.emergentagent.com/jobs/03446581-6b5e-450b-89be-4d149bdb3c41/images/aa5ab2f18951a044de8a9774f09fad6908db0fe46c55faa836d49a9f8bb8077e.png",
    },
];

export const Blog = () => {
    return (
        <section
            id="writing"
            data-testid="writing-section"
            className="relative py-28 md:py-40 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="06"
                    label="Writing"
                    title="Field notes on frontend architecture, performance, and the craft of shipping."
                />

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {posts.map((p, i) => (
                        <Reveal
                            key={p.title}
                            delay={i * 0.06}
                            className="col-span-12 md:col-span-4"
                        >
                            <a
                                href="#"
                                data-testid={`blog-post-${i}`}
                                className="group block card-surface h-full overflow-hidden"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden rounded-t-[24px] bg-white/[0.02]">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />
                                    <span className="absolute top-4 left-4 glass font-mono text-[10px] uppercase tracking-[0.18em] text-bone-50 px-2.5 py-1">
                                        {p.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4 font-mono text-[10px] text-bone-500 tracking-wider">
                                        <span>{p.date}</span>
                                        <span className="h-px w-4 bg-white/10" />
                                        <span>{p.readTime} read</span>
                                    </div>
                                    <h3 className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight text-bone-50 group-hover:text-rust transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-bone-300 font-light leading-relaxed">
                                        {p.excerpt}
                                    </p>
                                    <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500 group-hover:text-rust transition-colors">
                                        Read article
                                        <ArrowUpRight size={12} />
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
