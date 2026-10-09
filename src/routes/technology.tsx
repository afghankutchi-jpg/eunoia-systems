import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { platforms } from "@/lib/site";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology · Eunoia Systems" },
      { name: "description", content: "Eunoia Systems works inside the practice management and EHR software you already use." },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Your system stays the system of record."
        lede="Eunoia does not arrive with a rip-and-replace platform. Billing, follow-up, and reporting are configured around the software the practice already runs — any in-house system, including the ones below."
      />
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <img src="/images/reception.jpg" alt="Front desk of a small clinic with staff and a patient" className="aspect-[21/9] w-full rounded-3xl object-cover" />
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-3xl text-lg text-ink-soft">
          Names below are systems practices commonly operate. Listing them is not a claim of partnership, certification, or a preferred-vendor badge. It is a statement of fit: the work happens in your build, with your users, under your security rules.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article key={platform.name} className="rounded-3xl border border-line bg-white p-6">
              <h2 className="display text-2xl">{platform.name}</h2>
              <p className="mt-3 text-ink-soft">{platform.note}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3">
          {[
            { title: "One source of truth", body: "Charges, notes, and claim status stay in the practice system. Side spreadsheets are a symptom, not a design." },
            { title: "Edits where the claim is born", body: "Scrubbing rules sit as close to charge entry as the software allows, so the first pass is actually first." },
            { title: "Access with an owner", body: "Logins are named, limited, and removed when an engagement changes. Shared passwords are not a workflow." },
          ].map((item) => (
            <article key={item.title}>
              <h2 className="display text-3xl">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Tell us the system. We will tell you the fit." />
    </>
  );
}
