import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Writing", href: "#writing" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "glass-header" : "bg-transparent"
            }`}
            data-testid="site-header"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
                <a
                    href="#top"
                    data-testid="logo-link"
                    className="flex items-center gap-2 group"
                >
                    <div className="h-7 w-7 border border-white/20 flex items-center justify-center font-display font-black text-sm group-hover:border-rust transition-colors">
                        M
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.22em] text-bone-300 hidden sm:inline">
                        Mateo·Vance
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-9">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.label.toLowerCase()}`}
                            className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300 hover:text-bone-50 transition-colors relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-rust group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    data-testid="header-cta"
                    className="hidden md:inline-flex items-center gap-1.5 group font-mono text-xs uppercase tracking-[0.18em] border border-white/15 hover:border-rust hover:text-rust px-4 py-2 transition-all"
                >
                    Let's Talk
                    <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </a>

                <button
                    className="md:hidden text-bone-50 p-2"
                    onClick={() => setOpen(!open)}
                    data-testid="mobile-menu-toggle"
                    aria-label="Menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/5 bg-ink-900/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-5">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                    className="font-mono text-sm uppercase tracking-[0.18em] text-bone-300 hover:text-rust"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setOpen(false)}
                                data-testid="mobile-cta"
                                className="btn-primary w-fit mt-2"
                            >
                                Let's Talk <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
