import { useEffect } from "react";
import { Header } from "./components/portfolio/Header";
import { Hero } from "./components/portfolio/Hero";
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

export default function App() {
    useSpotlight();
    return (
        <div
            data-testid="app-root"
            className="relative z-10 text-bone-50 font-body min-h-screen"
        >
            <div className="noise-overlay" />
            <Header />
            <main>
                <Hero />
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
