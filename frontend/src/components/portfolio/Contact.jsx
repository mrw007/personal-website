import { Reveal } from "./shared";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative py-32 md:py-48 border-t border-white/5 overflow-hidden"
        >
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <Reveal>
                    <div className="overline text-rust mb-6">07 · Contact</div>
                    <h2
                        className="font-display text-5xl sm:text-7xl lg:text-[9rem] font-black tracking-[-0.04em] leading-[0.86] text-bone-50"
                        data-testid="contact-heading"
                    >
                        Let's build
                        <br />
                        something
                        <br />
                        <span className="italic font-medium text-bone-300">
                            durable
                            <span className="text-rust">.</span>
                        </span>
                    </h2>
                </Reveal>

                <Reveal delay={0.15} className="mt-16 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-7">
                        <p className="text-lg md:text-xl text-bone-300 font-light leading-relaxed max-w-2xl">
                            Based in Dublin with Stamp 1G — open to senior
                            frontend, staff, or tech-lead engagements across
                            Ireland and the EU. If you're rebuilding an Angular
                            platform, modernizing a design system, or scaling a
                            frontend team, I'd love to hear from you.
                        </p>
                        <a
                            href="mailto:mr.wahib@gmail.com"
                            data-testid="primary-email-cta"
                            className="mt-10 inline-flex items-center gap-3 group"
                        >
                            <span className="font-display text-2xl md:text-4xl font-bold text-bone-50 underline decoration-rust decoration-[2px] underline-offset-[6px] group-hover:text-rust transition-colors">
                                mr.wahib@gmail.com
                            </span>
                            <ArrowUpRight
                                size={28}
                                className="text-bone-300 group-hover:text-rust group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                            />
                        </a>
                    </div>

                    <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
                        {[
                            {
                                icon: Mail,
                                label: "Email",
                                value: "mr.wahib@gmail.com",
                                href: "mailto:mr.wahib@gmail.com",
                                test: "contact-email",
                            },
                            {
                                icon: Github,
                                label: "GitHub",
                                value: "github.com/mrw007",
                                href: "https://github.com/mrw007",
                                test: "contact-github",
                            },
                            {
                                icon: Linkedin,
                                label: "LinkedIn",
                                value: "in/wahib-kerkeni",
                                href: "https://www.linkedin.com/in/wahib-kerkeni-a5a4a5a5/",
                                test: "contact-linkedin",
                            },
                        ].map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                data-testid={c.test}
                                className="group glass glass-interactive flex items-center justify-between px-5 py-5"
                                style={{ borderRadius: 24 }}
                            >
                                <div className="flex items-center gap-4">
                                    <c.icon
                                        size={18}
                                        className="text-bone-300 group-hover:text-rust transition-colors"
                                    />
                                    <div>
                                        <div className="overline mb-0.5">
                                            {c.label}
                                        </div>
                                        <div className="font-mono text-sm text-bone-50">
                                            {c.value}
                                        </div>
                                    </div>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-bone-500 group-hover:text-rust group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                                />
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
