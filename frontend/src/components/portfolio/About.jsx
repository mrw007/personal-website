import { SectionHeader, Reveal } from "./shared";

const facts = [
  { k: "Angular years", v: "7+" },
  { k: "Teams on one DS", v: "8" },
  { k: "Apps modernized", v: "10+" },
  { k: "DS components", v: "40+" },
];

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          index="01"
          label="About"
          title="Angular platforms that hold up under scale, and the teams that ship them."
        />

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <Reveal
            delay={0.05}
            className="col-span-12 lg:col-span-7 space-y-6 text-bone-300 font-light text-lg leading-relaxed text-justify"
          >
            <p>
              I'm a senior frontend engineer who builds Angular platforms that
              have to hold up under scale, and who leads the teams that ship
              them. My work sits at the intersection of design systems,
              migrations, and the constraints that come with enterprise-scale
              delivery.
            </p>
            <p>
              At <span className="text-bone-50 font-medium">JCDecaux</span>, I
              built a shared design system now used by 8 teams and 10+
              mission-critical internal apps, while leading Angular migrations
              from 17 to 19 without blocking feature work.
            </p>
            <p>
              At <span className="text-bone-50 font-medium">SFR Business</span>,
              I rebuilt the MYPC self-service platform as a PWA for 1,000+
              enterprise users, cutting time-to-resolution from ~2 days to ~12
              hours and lifting test coverage from 60% to 70%.
            </p>
            <p>
              I care about the boring parts: performance budgets, accessibility,
              predictable builds, and codebases that stay understandable a year
              later. And I enjoy the unboring ones: standalone components,
              signals-first state, and a design language designers and engineers
              can actually agree on.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="card-surface p-6 md:p-8"
                  data-testid={`fact-${f.k.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="font-display font-black text-4xl md:text-5xl tracking-tight text-bone-50">
                    {f.v}
                  </div>
                  <div className="overline mt-2">{f.k}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 card-surface p-6">
              <div className="overline mb-3">Currently</div>
              <p className="font-mono text-xs text-bone-300 leading-relaxed">
                Senior Frontend / Full-Stack at JCDecaux — Paris. Based in{" "}
                <span className="text-bone-50 font-medium">Dublin</span> with{" "}
                <span className="text-bone-50 font-medium">
                  Stamp 1G work authorization.
                </span>{" "}
                Open to Senior Frontend / Tech Lead roles in Dublin, Ireland.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
