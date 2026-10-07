import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { articles } from "@/lib/site";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights · Eunoia Systems" },
      { name: "description", content: "Notes on first-pass acceptance, aging A/R, patient statements, and credentialing from Eunoia Systems." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Field notes, not a content calendar."
        lede="Four pieces on the decisions that actually move a revenue cycle. They are written for an administrator who has already seen a dashboard and still has a question."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16">
        {articles.map((article) => (
          <Link key={article.slug} to="/insights/$slug" params={{ slug: article.slug }} className="grid gap-3 rounded-3xl border border-line bg-white p-6 md:grid-cols-12 md:items-end">
            <span className="text-sm text-muted md:col-span-3">{article.date} · {article.minutes} min</span>
            <span className="md:col-span-9">
              <span className="display block text-3xl md:text-4xl">{article.title}</span>
              <span className="mt-3 block text-ink-soft">{article.dek}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
