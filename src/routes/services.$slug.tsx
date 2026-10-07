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
          <Link to="/contact" search={{ interest: service.title }} className="tap mt-8 inline-flex min-h-12 items-center rounded-full bg-pine px-6 font-medium text-paper">
            Discuss {service.name.toLowerCase()}
          </Link>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-lg text-ink-soft">{paragraph}</p>
        ))}
      </section>
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">What is actually done</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((item) => (
              <article key={item.title} className="rounded-3xl bg-paper p-5">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="display text-4xl">How an engagement moves</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {service.steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl border border-line p-5">
              <p className="text-sm text-copper">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-pine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="display text-4xl">Standards for this work</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.standards.map((item) => (
              <li key={item} className="rounded-2xl border border-pine-2 px-4 py-4 text-signal-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="display text-3xl">Continues into</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} to="/services/$slug" params={{ slug: item.slug }} className="rounded-3xl border border-line bg-white p-5 hover:border-signal">
              <p className="display text-2xl">{item.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.summary}</p>
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
