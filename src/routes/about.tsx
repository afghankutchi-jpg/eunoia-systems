import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { company, values } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Eunoia Systems" },
      { name: "description", content: "Eunoia Systems is an Austin revenue cycle firm built to keep healthcare practices paid with transparency." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Beautiful thinking, applied to an unbeautiful process."
        lede="Eunoia is the Greek word for beautiful thinking. The company uses it literally: revenue cycle work done with enough care that a practice can see what happened and why."
      />
      <div className="mx-auto max-w-6xl px-5 pt-12">
        <div className="overflow-hidden rounded-3xl">
          <img src="/images/exam.jpg" alt="A physician with a patient in a small clinic exam room" className="photo-ken aspect-video w-full object-cover" />
        </div>
      </div>
      <article className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-5 text-lg text-ink-soft md:col-span-7">
            <p>
              For a decade Eunoia Systems has automated and tightened the office processes, billing, and accounts-receivable collections of healthcare customers. The professionals on the work carry that company history plus more than eighteen years of industry exposure.
            </p>
            <p>
              Practices of every size get instruction on the financial process so clinicians can stay with patients. The financial health of a practice really does hinge on accurate, timely reimbursement — medical claims, aging recovery, and the daily management that keeps errors from becoming a culture.
            </p>
            <p>
              The company describes itself as built on moral ideals rather than on a hunt for the most flattering percentage. That shows up here as plain standards: a 98% first-pass acceptance target, aging held under 90 days, HIPAA as a floor, and reports written for the reader who has to act.
            </p>
            <p>
              Headquarters are at {company.address}, {company.city}. The work is delivered into the software the practice already trusts.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-3xl bg-pine p-8 text-ivory">
              <p className="text-sm tracking-wide text-copper">Mission</p>
              <p className="mt-3 text-lg">
                Specialty-focused outsourcing that helps practices move toward value-based care while insurance and patient financials are still managed with discipline.
              </p>
              <p className="mt-8 text-sm tracking-wide text-copper">Vision</p>
              <p className="mt-3 text-lg">
                Raise the standard of service with solutions a client can inspect — revenue cycle done with knowledge and total transparency.
              </p>
            </div>
          </aside>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl border border-line bg-white p-6">
              <h2 className="display text-3xl">{value.title}</h2>
              <p className="mt-3 text-ink-soft">{value.body}</p>
            </article>
          ))}
        </div>
        <div className="ruled mt-16 rounded-3xl border border-line p-8">
          <h2 className="display text-3xl">Why practices hand this over</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">The desk is already full. The claim still has to leave correctly.</p>
          <p className="mt-4 max-w-3xl text-lg text-ink-soft">
            Protocols change often enough to be a full-time job. Outsourcing billing and the compliance chores around it gives that job to people who do only that. Claims go in correctly and on time. Reports are shaped to the practice instead of pulled from a single template. The point of the engagement is cash flow with credibility intact — with patients, with staff, and with payers.
          </p>
        </div>
      </article>
      <CtaBand title="Talk to Austin, not to a ticket queue." body="Call, write, or send the shape of the problem. A person answers." />
    </>
  );
}
