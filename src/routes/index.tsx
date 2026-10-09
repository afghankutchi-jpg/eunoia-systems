import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, FaqList, SectionIntro } from "@/components/site/blocks";
import { proof, services, testimonials } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eunoia Systems · Healthcare Revenue Cycle Management" },
      {
        name: "description",
        content:
          "Austin-based revenue cycle management for medical practices: front office, billing, A/R recovery, credentialing, and denial management.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-sm font-medium tracking-wide text-signal">Austin, Texas · Revenue cycle management</p>
          <h1 className="display mt-4 text-5xl text-ink md:text-7xl">Revenue that keeps time with care.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Eunoia Systems runs the financial work of a small practice — scheduling, claims, and the last balance — so the people in the room can stay with the patient in front of them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" search={{ interest: "" }} className="tap inline-flex min-h-12 items-center rounded-full bg-signal px-6 font-medium text-on-gold">
              Request a revenue review
            </Link>
            <Link to="/services" className="tap inline-flex min-h-12 items-center rounded-full border border-line px-6 font-medium text-ink">
              View services
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <figure>
            <img src="/images/reception.jpg" alt="A physician greeting a patient at the front desk of a small clinic" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            <figcaption className="mt-3 text-sm text-muted">A small practice. The visit stays human. The ledger does not have to.</figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 md:grid-cols-3">
        <figure>
          <img src="/images/exam.jpg" alt="A doctor sitting with a smiling older patient in a small exam room" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <figcaption className="mt-3 text-sm text-muted">The exam stays with the clinician.</figcaption>
        </figure>
        <figure>
          <img src="/images/hallway.jpg" alt="A doctor walking with a parent and child in a small clinic hallway" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <figcaption className="mt-3 text-sm text-muted">Families should leave with an answer, not a surprise bill.</figcaption>
        </figure>
        <figure>
          <img src="/images/consult.jpg" alt="A physician and patient talking together in a small consultation room" className="aspect-[4/3] w-full rounded-3xl object-cover" />
          <figcaption className="mt-3 text-sm text-muted">What was decided in the room has to survive the claim.</figcaption>
        </figure>
      </section>

      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {proof.slice(0, 4).map((item) => (
            <div key={item.label}>
              <dt className="display text-4xl text-signal">{item.figure}</dt>
              <dd className="mt-2 text-ink-soft">{item.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <SectionIntro eyebrow="Services" title="One path. Separate pages." body="Each station has a heading, a plain description of the failure it prevents, and a page that says what the practice receives. Hire one, or hire the path. The handoffs stay written." />
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                <span className="display text-2xl md:col-span-4">{service.title}</span>
                <span className="text-ink-soft md:col-span-8">{service.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/calculators" className="mt-8 inline-block font-medium text-signal">
          Check days in A/R, collection, denials, and first-pass
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionIntro eyebrow="From the practices" title="What changes when someone owns the work." body="These are short letters from practices, not a case study. The pattern is the same: a named owner, a faster claim, and fewer afternoons lost to payment chasing." />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {testimonials.slice(0, 2).map((item) => (
            <figure key={item.name}>
              <blockquote className="text-xl text-ink">“{item.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-muted">
                <span className="font-medium text-ink">{item.name}</span> · {item.practice}
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/results" className="mt-8 inline-block font-medium text-signal">All results</Link>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-8">
        <SectionIntro eyebrow="Questions" title="Before you send a chart export." body="Scope, software, the 98% figure, and where the work is done. The longer answers live here so the first call is not a tour of the obvious." />
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
