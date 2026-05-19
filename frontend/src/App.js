import { useEffect, useState } from "react";
import { Header } from "./components/portfolio/Header";
import { Hero, TechStrip } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Toolkit } from "./components/portfolio/Toolkit";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Blog } from "./components/portfolio/Blog";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

// Spotlight glow — track mouse and feed CSS vars to every .card-surface in view.
function useSpotlight() {
    useEffect(() => {
        let ticking = false;
        let lastX = 0;
        let lastY = 0;

        const update = () => {
            ticking = false;
            const els = document.querySelectorAll(".card-surface");
            for (const el of els) {
                const r = el.getBoundingClientRect();
                if (
                    r.bottom < -200 ||
                    r.top > window.innerHeight + 200 ||
                    r.right < 0 ||
                    r.left > window.innerWidth
                )
                    continue;
                el.style.setProperty("--mx", `${lastX - r.left}px`);
                el.style.setProperty("--my", `${lastY - r.top}px`);
            }
        };

        const onMove = (e) => {
            lastX = e.clientX;
            lastY = e.clientY;
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
}

function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") root.classList.add("light");
        else root.classList.remove("light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme];
}

export default function App() {
    useSpotlight();
    const [theme, setTheme] = useTheme();
    return (
        <div
            data-testid="app-root"
            className="relative z-10 text-bone-50 font-body min-h-screen"
        >
            {/* Global SVG duotone filter (rust + black) for portrait cutouts */}
            <svg
                width="0"
                height="0"
                style={{ position: "absolute" }}
                aria-hidden="true"
            >
                <defs>
                    <filter
                        id="wk-duotone"
                        colorInterpolationFilters="sRGB"
                    >
                        <feColorMatrix
                            type="matrix"
                            values="0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0 0 0 1 0"
                        />
                        <feComponentTransfer>
                            <feFuncR
                                type="table"
                                tableValues="0.04 0.88 0.96"
                            />
                            <feFuncG
                                type="table"
                                tableValues="0.04 0.36 0.62"
                            />
                            <feFuncB
                                type="table"
                                tableValues="0.04 0.23 0.55"
                            />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>

            <div className="noise-overlay" />
            <Header theme={theme} setTheme={setTheme} />
            <main>
                <Hero />
                <TechStrip />
                <About />
                <Skills />
                <Toolkit />
                <Experience />
                <Projects />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
