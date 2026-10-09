import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services · Eunoia Systems" },
      { name: "description", content: "Front office, billing, charge capture, prior authorization, A/R, denials, credentialing, contracting, patient financials, analytics, value-based care, coding, and compliance." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The cycle, taken apart so it can be staffed."
        lede="Thirteen stations, each staffed as its own page because each one fails differently. Hire the station that is leaking, or hire the path. The handoffs are written either way, and every page says what the practice actually receives."
      />
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <figure>
          <img src="/images/exam.jpg" alt="A physician with a patient in a neighborhood clinic" className="aspect-[21/9] w-full rounded-3xl object-cover" />
          <figcaption className="mt-3 text-sm text-muted">Every service below exists so this room does not have to become a billing office.</figcaption>
        </figure>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ul className="divide-y divide-line border-y border-line">
          {services.map((service) => (
            <li key={service.slug}>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="md:col-span-4">
                  <span className="display block text-3xl">{service.title}</span>
                  <span className="text-sm text-signal">{service.eyebrow}</span>
                </span>
                <span className="text-ink-soft md:col-span-8">{service.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
