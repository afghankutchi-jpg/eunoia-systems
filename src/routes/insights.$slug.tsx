import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "@/lib/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.article.title ?? "Insight"} · Eunoia Systems` },
      { name: "description", content: loaderData?.article.dek ?? "" },
    ],
  }),
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24">
      <h1 className="display text-5xl">That note is not here.</h1>
      <Link to="/insights" className="mt-6 inline-block text-signal">Back to insights</Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const more = articles.filter((item) => item.slug !== article.slug);
  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-sm text-muted">{article.date} · {article.minutes} min read</p>
      <h1 className="display mt-4 text-4xl md:text-6xl">{article.title}</h1>
      <p className="mt-6 text-xl text-ink-soft">{article.dek}</p>
      <div className="mt-12 space-y-10">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="display text-3xl">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="mt-4 text-lg text-ink-soft">{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
      <aside className="mt-16 border-t border-line pt-8">
        <p className="text-sm font-medium tracking-wide text-signal">Continue</p>
        <ul className="mt-4 space-y-3">
          {more.map((item) => (
            <li key={item.slug}>
              <Link to="/insights/$slug" params={{ slug: item.slug }} className="text-lg hover:text-signal">{item.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
