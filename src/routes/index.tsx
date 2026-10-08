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
            Eunoia Systems runs the financial work of a practice, from the schedule to the last balance, so clinicians stay with patients.
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
          <div className="rounded-3xl bg-pine px-8 py-10">
            <img src="/logo-gold.png" alt="Eunoia Systems" className="mx-auto w-full max-w-xs" />
          </div>
        </div>
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
        <SectionIntro eyebrow="Services" title="One path. Separate pages." body="Hire the whole cycle or the station that is leaking. Every page says what the practice receives." />
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
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <SectionIntro eyebrow="From the practices" title="What changes when someone owns the work." />
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
        <SectionIntro eyebrow="Questions" title="Before you send a chart export." />
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
