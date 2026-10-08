import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { TrajectoryChart } from "@/components/site/chart-panel";
import { proof, testimonials } from "@/lib/site";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results · Eunoia Systems" },
      { name: "description", content: "Operating standards and practice letters from Eunoia Systems revenue cycle engagements." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Standards we will say out loud, and letters from practices."
        lede="The figures below are operating standards and a model of how an engagement is meant to move. The quotations are from practices, attributed the way they were given — by initial and setting, not as a trophy wall of full names."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {proof.map((item) => (
          <article key={item.label} className="rounded-3xl bg-pine p-6 text-ivory">
            <p className="display text-4xl">{item.figure}</p>
            <p className="mt-2 text-signal-2">{item.label}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="rounded-3xl border border-line bg-white p-6">
          <h2 className="display text-3xl">Illustrative trajectory</h2>
          <p className="mt-2 max-w-2xl text-ink-soft">
            Clean-claim percentage rising toward the 98% standard, denial percentage easing. This is a picture of the intended shape of the work over eight months, not an audited case study.
          </p>
          <div className="mt-4">
            <TrajectoryChart />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure key={item.name} className="rounded-3xl border border-line bg-white p-6">
            <blockquote className="text-lg">“{item.quote}”</blockquote>
            <figcaption className="mt-5 text-sm text-muted">
              <span className="font-medium text-ink">{item.name}</span> · {item.practice}
            </figcaption>
          </figure>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
