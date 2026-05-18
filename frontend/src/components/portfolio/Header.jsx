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
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="fixed top-4 md:top-5 left-0 right-0 z-50 px-4 md:px-6 flex justify-center pointer-events-none"
            data-testid="site-header"
        >
            <div
                className={`pointer-events-auto glass flex items-center gap-2 md:gap-3 transition-all duration-500 ${
                    scrolled ? "shadow-2xl" : ""
                }`}
                style={{
                    borderRadius: 9999,
                    padding: "0.45rem 0.55rem 0.45rem 1.1rem",
                }}
            >
                <a
                    href="#top"
                    data-testid="logo-link"
                    className="flex items-center gap-2.5 group pr-2 md:pr-4 border-r border-white/10"
                >
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center font-display font-black text-sm group-hover:border-rust transition-colors">
                        M
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone-300 hidden sm:inline">
                        Mateo·Vance
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-${l.label.toLowerCase()}`}
                            className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-300 hover:text-bone-50 transition-all px-3 py-2 rounded-full hover:bg-white/5"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    data-testid="header-cta"
                    className="hidden md:inline-flex items-center gap-1.5 group font-mono text-[10px] uppercase tracking-[0.18em] text-white px-4 py-2 rounded-full transition-all ml-1"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(224,93,58,0.95) 0%, rgba(199,75,42,0.95) 100%)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        boxShadow:
                            "inset 0 1px 0 0 rgba(255,255,255,0.35), 0 4px 16px -4px rgba(224,93,58,0.5)",
                    }}
                >
                    Let's Talk
                    <ArrowUpRight
                        size={12}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </a>

                <button
                    className="md:hidden text-bone-50 p-2 ml-auto rounded-full hover:bg-white/5 transition-colors"
                    onClick={() => setOpen(!open)}
                    data-testid="mobile-menu-toggle"
                    aria-label="Menu"
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-full mt-3 left-4 right-4 pointer-events-auto"
                    >
                        <div
                            className="glass p-2"
                            style={{ borderRadius: 24 }}
                        >
                            <div className="flex flex-col gap-1 p-2">
                                {links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        onClick={() => setOpen(false)}
                                        data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                        className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300 hover:text-bone-50 hover:bg-white/5 px-4 py-3 rounded-2xl transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    data-testid="mobile-cta"
                                    className="btn-primary mt-2 justify-center"
                                >
                                    Let's Talk <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
