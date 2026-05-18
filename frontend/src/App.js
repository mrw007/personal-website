import { Header } from "./components/portfolio/Header";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Blog } from "./components/portfolio/Blog";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

export default function App() {
    return (
        <div
            data-testid="app-root"
            className="bg-ink-900 text-bone-50 font-body min-h-screen relative"
        >
            <div className="noise-overlay" />
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
