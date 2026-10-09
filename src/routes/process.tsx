import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { ClaimBeads, RevenueDial } from "@/components/site/graphics";
import { cycle } from "@/lib/site";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "The cycle · Eunoia Systems" },
      { name: "description", content: "How Eunoia Systems runs healthcare revenue cycle work from access through resolution." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="The cycle"
        title="Six stations. A claim is only finished at the last one."
        lede="Revenue cycle is a loop, which is why the graphics on this site refuse to sit still. Skip a station and the loop comes back as a denial, an aging bucket, or a patient who does not understand the bill."
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <img src="/images/consult.jpg" alt="A physician and patient talking in a small consultation room" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <p className="mt-3 text-sm text-muted">The conversation in the room is the start of the claim, not a separate story.</p>
        </div>
        <div>
          <RevenueDial />
          <div className="mt-8">
            <ClaimBeads />
          </div>
          <p className="mt-6 text-lg text-ink-soft">
            Each bead is a status with an owner. If a claim sits between two of them with nobody assigned, it is already late — even when the filing limit is still weeks away.
          </p>
        </div>
      </section>
      <section className="border-t border-line">
        <ol className="mx-auto max-w-6xl px-5">
          {cycle.map((step) => (
            <li key={step.id} className="grid gap-4 border-b border-line py-10 md:grid-cols-12">
              <p className="display text-signal md:col-span-2">{step.id}</p>
              <h2 className="display text-4xl md:col-span-3">{step.title}</h2>
              <p className="text-lg text-ink-soft md:col-span-7">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <CtaBand title="Walk your cycle against these six." body="Most practices are excellent at two stations and quietly exposed at one. The review names which." />
    </>
  );
}
