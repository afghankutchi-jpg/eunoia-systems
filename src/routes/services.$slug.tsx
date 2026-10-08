import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/blocks";
import { getService, services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title ?? "Service"} · Eunoia Systems` },
      { name: "description", content: loaderData?.service.summary ?? "" },
    ],
  }),
  component: ServicePage,
  notFoundComponent: MissingService,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = service.related.map((slug) => getService(slug)).filter((item) => item != null);
  return (
    <>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="text-sm font-medium tracking-wide text-signal">{service.eyebrow}</p>
          <h1 className="display mt-4 max-w-4xl text-4xl md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">{service.lede}</p>
          <Link to="/contact" search={{ interest: service.title }} className="tap mt-8 inline-flex min-h-12 items-center rounded-full bg-signal px-6 font-medium text-on-gold">
            Discuss {service.name.toLowerCase()}
          </Link>
        </div>
      </header>
      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-6">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg text-ink-soft">{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">What the practice receives</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {service.record.map((item) => (
              <li key={item} className="py-4 text-lg text-ink">{item}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">What is actually done</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {service.capabilities.map((item) => (
              <article key={item.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
                <h3 className="text-lg font-medium md:col-span-4">{item.title}</h3>
                <p className="text-ink-soft md:col-span-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="display text-4xl">How an engagement moves</h2>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {service.steps.map((step, index) => (
            <li key={step.title} className="grid gap-2 py-6 md:grid-cols-12 md:gap-8">
              <p className="text-signal md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-medium md:col-span-3">{step.title}</h3>
              <p className="text-ink-soft md:col-span-8">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-pine text-ivory">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">Standards for this work</h2>
          <ul className="mt-8 max-w-3xl space-y-3">
            {service.standards.map((item) => (
              <li key={item} className="text-lg text-signal-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="display text-3xl">Continues into</h2>
        <div className="mt-6 flex flex-col gap-3">
          {related.map((item) => (
            <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="text-lg text-signal">
              {item.title}
            </Link>
          ))}
        </div>
        <Link to="/services" className="mt-8 inline-block text-sm font-medium text-signal">All services</Link>
      </section>
      <CtaBand />
    </>
  );
}

function MissingService() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24">
      <h1 className="display text-5xl">That service is not on the menu.</h1>
      <ul className="mt-8 space-y-2">
        {services.map((service) => (
          <li key={service.slug}>
            <Link to="/services/$slug" params={{ slug: service.slug }} className="text-lg text-signal">{service.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
