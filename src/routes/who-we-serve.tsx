import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { audiences, models } from "@/lib/site";

export const Route = createFileRoute("/who-we-serve")({
  head: () => ({
    meta: [
      { title: "Who we serve · Eunoia Systems" },
      { name: "description", content: "Revenue cycle support for physicians, groups, hospitals, clinics, and specialty centers." },
    ],
  }),
  component: WhoPage,
});

function WhoPage() {
  return (
    <>
      <PageHero
        eyebrow="Practices"
        title="As much of the cycle as you actually need."
        lede="The original promise still holds: experts help with as much, or as little, as a practice requires. The difference is that “little” is still a defined scope, not a vague retainer."
      />
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <figure>
          <img src="/images/hallway.jpg" alt="A doctor with a parent and child in a small clinic" className="aspect-[21/9] w-full rounded-3xl object-cover" />
          <figcaption className="mt-3 text-sm text-muted">Groups, solo clinicians, and family practices. The scope changes. The standard does not.</figcaption>
        </figure>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
        {audiences.map((item) => (
          <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
            <h2 className="display text-3xl">{item.title}</h2>
            <p className="mt-2 text-sm text-signal">Who holds the worklist</p>
            <p className="mt-4 text-ink-soft">{item.body}</p>
          </article>
        ))}
      </section>
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">How the work is scoped</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-soft">Three ways in. Each one names the stations, the reports, and the date the work is reviewed.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {models.map((model, index) => (
              <article key={model.title} className="rounded-3xl bg-paper p-6">
                <p className="text-sm text-signal">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="display mt-2 text-3xl">{model.title}</h3>
                <p className="mt-3 text-ink-soft">{model.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="display max-w-3xl text-4xl">What every organization still gets</h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">Size changes the volume. It does not change the finish: a status, an owner, and a reason if the money did not arrive.</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "A named standard: clean claims, aging under 90 days, denials with causes.",
            "Work inside the software you already pay for.",
            "HIPAA-minded handling and a business associate agreement on a real engagement.",
            "Reports an owner can read without a decoder.",
            "Specialty context, whether the panel is one clinician or a hospital service line.",
            "A finish: paid, appealed, billed to the patient, or written off on purpose.",
          ].map((item) => (
            <li key={item} className="rounded-3xl border border-line px-5 py-4 text-ink-soft">{item}</li>
          ))}
        </ul>
        <Link to="/specialties" className="mt-8 inline-block font-medium text-signal">Browse specialties</Link>
      </section>
      <CtaBand />
    </>
  );
}
