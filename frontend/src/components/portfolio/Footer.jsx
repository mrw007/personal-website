import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer
            data-testid="site-footer"
            className="relative border-t border-white/5 bg-ink-900"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="h-7 w-7 border border-white/20 flex items-center justify-center font-display font-black text-sm">
                        W
                    </div>
                    <div>
                        <div className="font-display font-bold text-bone-50">
                            Wahib Kerkeni
                        </div>
                        <div className="overline mt-0.5">
                            Angular · Architecture · Design Systems
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 font-mono text-xs text-bone-500 tracking-wider">
                    <span>© 2026 · Based in Dublin</span>
                    <span className="hidden md:inline h-px w-6 bg-white/10" />
                    <span className="hidden md:inline">
                        EN · FR · AR
                    </span>
                </div>

                <a
                    href="#top"
                    data-testid="back-to-top"
                    className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-300 hover:text-rust group transition-colors"
                >
                    <span>Back to top</span>
                    <span className="h-8 w-8 border border-white/15 flex items-center justify-center group-hover:border-rust transition-colors">
                        <ArrowUp size={14} />
                    </span>
                </a>
            </div>
        </footer>
    );
};
