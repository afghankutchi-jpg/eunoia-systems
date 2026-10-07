import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/blocks";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance · Eunoia Systems" },
      { name: "description", content: "HIPAA-minded revenue cycle operations, access control, and documentation standards at Eunoia Systems." },
    ],
  }),
  component: CompliancePage,
});

const items = [
  { title: "HIPAA as the floor", body: "Protected health information is handled under the HIPAA privacy and security rules. A business associate agreement is part of an engagement that touches patient data — not a document produced after the fact." },
  { title: "Least access", body: "People see the records required for the station they run. Access is individual, not a shared login taped to a monitor, and it is removed when the work changes." },
  { title: "The practice system wins", body: "Clinical and billing records stay in the system the practice controls. This public website does not accept, store, or process medical records." },
  { title: "Documentation that can be shown", body: "Coding reviews compare the note with the claim. If it cannot be explained from the record, it is not defended with adjectives." },
  { title: "Payer rules as they are", body: "Filing limits, appeal windows, authorization requirements, and coverage rules are operational deadlines. They are not interpreted creatively to make a week look better." },
  { title: "What we do not invent", body: "Eunoia publishes HIPAA compliance and careful operations. This site does not claim SOC 2, HITRUST, or any certification the company has not stated." },
];

function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Protect the chart. Then protect the claim."
        lede="Trust, in the company’s own words, means the privacy and security of client data come before convenience. The revenue cycle sits inside that duty — it does not get an exception because cash is waiting."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-line bg-white p-6">
            <h2 className="display text-3xl">{item.title}</h2>
            <p className="mt-3 text-ink-soft">{item.body}</p>
          </article>
        ))}
      </section>
      <CtaBand title="Ask for the BAA before the data." body="A serious conversation starts with how information will move, who can see it, and where it will not be stored." />
    </>
  );
}
