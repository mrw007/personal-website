import { Reveal } from "./shared";
import { ArrowUpRight, Mail, Github, Linkedin, Dribbble, FileDown } from "lucide-react";

const MediumIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

const BehanceIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.14 1.4-.433 1.96-.29.55-.7 1.01-1.205 1.38-.51.36-1.102.63-1.77.8-.67.17-1.38.25-2.13.25H0V4.51h6.938v-.007zm-.34 5.65c.6 0 1.09-.15 1.47-.44.38-.3.57-.77.57-1.43 0-.36-.065-.67-.19-.91-.13-.24-.3-.43-.52-.57-.22-.14-.47-.24-.75-.3-.28-.06-.57-.09-.88-.09H3.35V10.15h3.248v.003zm.15 5.77c.34 0 .66-.03.96-.1.3-.07.56-.18.79-.34.23-.16.41-.37.54-.63.13-.26.19-.59.19-.99 0-.79-.22-1.36-.67-1.69-.44-.33-1.02-.5-1.75-.5H3.35v4.25h3.398zm8.958-1.02c.45.44 1.1.66 1.95.66.61 0 1.14-.15 1.58-.46.44-.3.71-.63.81-.97h2.77c-.44 1.37-1.11 2.36-2.03 2.96-.91.6-2.02.9-3.31.9-.9 0-1.71-.14-2.43-.44-.72-.29-1.33-.7-1.84-1.24-.5-.53-.89-1.17-1.16-1.92-.27-.74-.4-1.56-.4-2.44 0-.85.14-1.65.43-2.39.29-.74.7-1.38 1.22-1.92.52-.54 1.14-.96 1.86-1.26.72-.3 1.51-.45 2.38-.45 1 0 1.87.19 2.6.57.73.38 1.33.9 1.8 1.56.47.66.81 1.42 1.02 2.28.2.86.27 1.76.2 2.71H16.26c0 .87.23 1.52.67 1.96zm3.32-5.23c-.36-.4-.92-.6-1.67-.6-.49 0-.9.08-1.22.25-.32.17-.58.38-.78.63-.2.25-.34.52-.42.8-.08.29-.13.56-.14.82h4.97c-.1-.84-.39-1.5-.74-1.9zM15.24 5.53h5.53v1.56h-5.53V5.53z" />
    </svg>
);

const BASE_URL = import.meta.env.BASE_URL;

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
                        <p className="text-lg md:text-xl text-bone-300 font-light leading-relaxed max-w-2xl text-justify">
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
                        <div className="mt-6">
                            <a
                                href={`${BASE_URL}Wahib_KerkenI_Senior_Angular_Engineer.pdf`}
                                download="Wahib_KerkenI_Senior_Angular_Engineer.pdf"
                                data-testid="contact-cv"
                                className="btn-primary"
                            >
                                <FileDown size={16} />
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col gap-3 lg:items-end">
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
                            {
                                icon: MediumIcon,
                                label: "Medium",
                                value: "@mr.wahib",
                                href: "https://medium.com/@mr.wahib",
                                test: "contact-medium",
                            },
                            {
                                icon: Dribbble,
                                label: "Dribbble",
                                value: "mrw007",
                                href: "https://dribbble.com/mrw007",
                                test: "contact-dribbble",
                            },
                            {
                                icon: BehanceIcon,
                                label: "Behance",
                                value: "mrw007",
                                href: "https://www.behance.net/mrw007",
                                test: "contact-behance",
                            },
                        ].map((c) => (
                            <a
                                key={c.label}
                                href={c.href}
                                target={c.href.startsWith("http") ? "_blank" : undefined}
                                rel="noreferrer"
                                data-testid={c.test}
                                className="group glass glass-interactive flex items-center justify-between px-5 py-5 w-full"
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
