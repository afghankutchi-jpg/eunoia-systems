import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services · Eunoia Systems" },
      { name: "description", content: "Front office, medical billing, A/R recovery, credentialing, denial management, patient financials, value-based care, and coding integrity." },
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
        lede="Each service is a full page because each one fails differently. Hire the station that is leaking, or hire the whole path. The handoffs are written either way."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="grid gap-4 rounded-3xl border border-line bg-white p-6 md:grid-cols-12 md:items-center"
          >
            <span className="display text-copper md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
            <span className="md:col-span-4">
              <span className="display block text-3xl">{service.title}</span>
              <span className="text-sm text-signal">{service.eyebrow}</span>
            </span>
            <span className="text-ink-soft md:col-span-6">{service.summary}</span>
            <ArrowUpRight className="hidden md:col-span-1 md:block" />
          </Link>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
