import { useEffect, useMemo, useState } from "react";
import { SectionHeader, Reveal } from "./shared";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const MEDIUM_RSS_URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mr.wahib";
const MAX_ARTICLES = 9;

const stripHtml = (html = "") =>
    html
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "Recent";
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

const computeReadTime = (content = "") => {
    const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min`;
};

const buildExcerpt = (content = "") => {
    const plain = stripHtml(content);
    if (!plain) return "Read the full article on Medium.";
    const sentences = plain.match(/[^.!?]+[.!?]+/g) || [plain];
    const excerpt = sentences.slice(0, 3).join(" ").trim();
    return excerpt.length > 220 ? `${excerpt.slice(0, 217).trim()}...` : excerpt;
};

const extractFirstImageSrc = (html = "") => {
    const imageSrcPattern = /<img[^>]+src=["']([^"']+)["']/i;
    const match = imageSrcPattern.exec(html);
    return match?.[1] || "";
};

const normalizeImageUrl = (rawUrl = "") => {
    const url = String(rawUrl || "").trim();
    if (!url) return "";
    if (url.startsWith("https://") || url.startsWith("http://")) return url;
    if (url.startsWith("//")) return `https:${url}`;
    if (url.startsWith("/")) return `https://medium.com${url}`;
    return `https://medium.com/${url.replace(/^\/+/, "")}`;
};

const resolveArticleImage = (item = {}) => {
    const enclosureUrl = item.enclosure?.link || "";
    const thumbnailUrl = item.thumbnail || "";
    const contentImageUrl = extractFirstImageSrc(item.content || "");

    return (
        normalizeImageUrl(enclosureUrl) ||
        normalizeImageUrl(thumbnailUrl) ||
        normalizeImageUrl(contentImageUrl) ||
        ""
    );
};

const getCardsPerView = () => {
    const width = globalThis?.innerWidth;
    if (typeof width !== "number") return 3;
    if (width >= 1024) return 3;
    if (width >= 768) return 2;
    return 1;
};

export const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(() => getCardsPerView());
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const onResize = () => {
            setCardsPerView(getCardsPerView());
        };
        globalThis.addEventListener("resize", onResize, { passive: true });
        return () => {
            globalThis.removeEventListener("resize", onResize);
        };
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const loadMediumArticles = async () => {
            setIsLoading(true);
            setHasError(false);
            try {
                const response = await fetch(MEDIUM_RSS_URL, {
                    signal: controller.signal,
                });
                if (!response.ok) {
                    throw new Error("Medium RSS request failed");
                }
                const json = await response.json();
                const items = Array.isArray(json.items) ? json.items : [];

                const mapped = items.slice(0, MAX_ARTICLES).map((item) => {
                    const image = resolveArticleImage(item);

                    return {
                        title: item.title || "Untitled article",
                        date: formatDate(item.pubDate),
                        readTime: computeReadTime(item.content),
                        excerpt: buildExcerpt(item.content),
                        image,
                        link: item.link || "https://medium.com/@mr.wahib",
                    };
                });

                setArticles(mapped);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setHasError(true);
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadMediumArticles();

        return () => {
            controller.abort();
        };
    }, []);

    const maxIndex = useMemo(
        () => Math.max(0, articles.length - cardsPerView),
        [articles.length, cardsPerView]
    );

    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < maxIndex;

    const goPrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const cardBasisClass = "basis-full md:basis-1/2 lg:basis-1/3";

    return (
        <section
            id="writing"
            data-testid="writing-section"
            className="relative py-32 md:py-48 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader
                    index="07"
                    label="Writing"
                    title="Field notes on frontend architecture, performance, and the craft of shipping."
                />

                <Reveal>
                    <div className="relative z-20 flex items-center justify-end gap-2 mb-6">
                        <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Previous articles"
                            disabled={!canGoPrev}
                            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-rust transition-colors disabled:opacity-35 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={16} className="text-bone-300" />
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            aria-label="Next articles"
                            disabled={!canGoNext}
                            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-rust transition-colors disabled:opacity-35 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={16} className="text-bone-300" />
                        </button>
                    </div>

                    {isLoading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {[0, 1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="card-surface h-full overflow-hidden animate-pulse"
                                >
                                    <div className="aspect-[5/3] rounded-t-[24px] bg-white/[0.04]" />
                                    <div className="p-6 space-y-3">
                                        <div className="h-3 w-28 bg-white/[0.07] rounded" />
                                        <div className="h-6 w-10/12 bg-white/[0.07] rounded" />
                                        <div className="h-4 w-full bg-white/[0.06] rounded" />
                                        <div className="h-4 w-11/12 bg-white/[0.06] rounded" />
                                        <div className="h-4 w-8/12 bg-white/[0.06] rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {!isLoading && hasError && (
                        <div className="card-surface p-8 text-bone-300">
                            <p className="text-base font-light">
                                Articles loading... visit
                                {" "}
                                <a
                                    href="https://medium.com/@mr.wahib"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-rust hover:text-rust-300 transition-colors"
                                >
                                    medium.com/@mr.wahib
                                </a>
                            </p>
                        </div>
                    )}

                    {!isLoading && !hasError && (
                        <div className="overflow-hidden -mx-2 md:-mx-3 pb-14 -mb-14">
                            <div
                                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                            >
                                    {articles.map((p, i) => (
                                        <article
                                            key={p.link}
                                            className={`${cardBasisClass} shrink-0 px-2 md:px-3`}
                                        >
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                data-testid={`blog-post-${i}`}
                                                className="group block card-surface h-full overflow-hidden"
                                            >
                                                <div className="relative aspect-[5/3] overflow-hidden rounded-t-[24px] bg-white/[0.02]">
                                                    {p.image ? (
                                                        <img
                                                            src={p.image}
                                                            alt={p.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                                        />
                                                    ) : (
                                                        <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-black flex items-end p-4">
                                                            <p className="font-display text-sm font-semibold leading-snug tracking-tight text-bone-100 line-clamp-3">
                                                                {p.title}
                                                            </p>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-transparent to-transparent" />
                                                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-rust/25 to-transparent" />
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
                                                        READ ARTICLE
                                                        <ArrowUpRight size={12} />
                                                    </div>
                                                </div>
                                            </a>
                                        </article>
                                    ))}
                            </div>
                        </div>
                    )}
                </Reveal>
            </div>
        </section>
    );
};
