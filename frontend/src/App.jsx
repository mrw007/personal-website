import {
  lazy,
  Suspense,
  useEffect,
  useState,
  useEffectEvent,
  memo,
} from "react";
import { Header } from "./components/portfolio/Header";
import { Hero, TechStrip } from "./components/portfolio/Hero";
const About = lazy(() =>
  import("./components/portfolio/About").then((module) => ({
    default: module.About,
  })),
);
const Skills = lazy(() =>
  import("./components/portfolio/Skills").then((module) => ({
    default: module.Skills,
  })),
);
const Toolkit = lazy(() =>
  import("./components/portfolio/Toolkit").then((module) => ({
    default: module.Toolkit,
  })),
);
const Experience = lazy(() =>
  import("./components/portfolio/Experience").then((module) => ({
    default: module.Experience,
  })),
);
const Education = lazy(() =>
  import("./components/portfolio/Education").then((module) => ({
    default: module.Education,
  })),
);
const Community = lazy(() =>
  import("./components/portfolio/Community").then((module) => ({
    default: module.Community,
  })),
);
const Blog = lazy(() =>
  import("./components/portfolio/Blog").then((module) => ({
    default: module.Blog,
  })),
);
const Contact = lazy(() =>
  import("./components/portfolio/Contact").then((module) => ({
    default: module.Contact,
  })),
);
const Footer = lazy(() =>
  import("./components/portfolio/Footer").then((module) => ({
    default: module.Footer,
  })),
);

// Spotlight glow — global mouse tracking with cached geometry and visible-card updates.
function useSpotlight() {
  useEffect(() => {
    const reduceMotion = globalThis.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const coarsePointer = globalThis.matchMedia("(pointer: coarse)");
    if (reduceMotion.matches || coarsePointer.matches) return;

    const cards = new Set();
    const visibleCards = new Set();

    let paintRafId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const updateCardPosition = (card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${mouseX - rect.left}px`);
      card.style.setProperty("--my", `${mouseY - rect.top}px`);
    };

    const schedulePaint = () => {
      if (!paintRafId) {
        paintRafId = requestAnimationFrame(() => {
          paintRafId = 0;
          for (const card of visibleCards) {
            updateCardPosition(card);
          }
        });
      }
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      schedulePaint();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const card = entry.target;
          if (entry.isIntersecting) {
            visibleCards.add(card);
          } else {
            visibleCards.delete(card);
          }
        }
      },
      { root: null, rootMargin: "200px 0px" },
    );

    const registerCard = (card) => {
      if (!(card instanceof HTMLElement) || cards.has(card)) return;
      cards.add(card);
      observer.observe(card);
    };

    const unregisterCard = (card) => {
      if (!(card instanceof HTMLElement) || !cards.has(card)) return;
      cards.delete(card);
      visibleCards.delete(card);
      observer.unobserve(card);
    };

    document.querySelectorAll(".card-surface").forEach((card) => {
      registerCard(card);
    });

    const handleMutationNodes = (nodes, mode) => {
      for (const node of nodes) {
        if (!(node instanceof HTMLElement)) continue;

        if (node.matches(".card-surface")) {
          mode(node);
        }

        const nestedCards = node.querySelectorAll?.(".card-surface") || [];
        for (const card of nestedCards) {
          mode(card);
        }
      }
    };

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        handleMutationNodes(mutation.addedNodes, registerCard);
        handleMutationNodes(mutation.removedNodes, unregisterCard);
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    globalThis.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      globalThis.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(paintRafId);
    };
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (globalThis.window === undefined) return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  // React 19.2: useEffectEvent extracts non-reactive logic from effects
  const persistTheme = useEffectEvent((newTheme) => {
    const root = document.documentElement;
    if (newTheme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", newTheme);
  });

  useEffect(() => {
    persistTheme(theme);
  }, [theme, persistTheme]);

  return [theme, setTheme];
}

function useMacDesktopClass() {
  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const ua = navigator.userAgent;
    const isMac = /Macintosh/i.test(ua);
    const isTouchDevice = navigator.maxTouchPoints > 1;

    if (!isMac || isTouchDevice) return;

    const root = document.documentElement;
    root.classList.add("mac-desktop");
    return () => root.classList.remove("mac-desktop");
  }, []);
}

const AppComponent = () => {
  useSpotlight();
  useMacDesktopClass();
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
          <filter id="wk-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0.299 0.587 0.114 0 0
                                    0 0 0 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.04 0.88 0.96" />
              <feFuncG type="table" tableValues="0.04 0.36 0.62" />
              <feFuncB type="table" tableValues="0.04 0.23 0.55" />
            </feComponentTransfer>
            {/* Re-apply source alpha to prevent transparent pixels from gaining colour */}
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      <div className="noise-overlay" />
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <TechStrip />
        <Suspense fallback={<div aria-hidden="true" className="h-24" />}>
          <About />
          <Skills />
          <Toolkit theme={theme} />
          <Experience />
          <Education />
          <Community />
          {/* <Projects /> */}
          <Blog />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

const App = memo(AppComponent);
App.displayName = "App";

export default App;
