import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { specialties } from "@/lib/site";

export const Route = createFileRoute("/specialties")({
  head: () => ({
    meta: [
      { title: "Specialties · Eunoia Systems" },
      { name: "description", content: "Specialty-specific revenue cycle support across procedural, cognitive, behavioral, facility, and dental practices." },
    ],
  }),
  component: SpecialtiesPage,
});

const groups = ["All", ...Array.from(new Set(specialties.map((item) => item.group)))];

function SpecialtiesPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const visible = useMemo(
    () =>
      specialties.filter((item) => {
        const matchesGroup = group === "All" || item.group === group;
        const haystack = `${item.name} ${item.note} ${item.group}`.toLowerCase();
        return matchesGroup && haystack.includes(query.trim().toLowerCase());
      }),
    [group, query],
  );

  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="The denial is usually local to the specialty."
        lede="A family practice and an orthopedic group do not fail in the same place. Coverage below is how the work is tuned — not a claim that every code set on earth has a brochure."
      />
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <img src="/images/hallway.jpg" alt="A clinician with a family in a small clinic corridor" className="aspect-[21/9] w-full rounded-3xl object-cover" />
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="block w-full md:max-w-sm">
            <span className="sr-only">Search specialties</span>
            <input className="field" value={query} placeholder="Search specialties" onChange={(event) => setQuery(event.target.value)} />
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by group">
            {groups.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGroup(item)}
                className={`tap min-h-11 rounded-full px-4 text-sm ${group === item ? "bg-signal text-on-gold" : "border border-line bg-white text-ink"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((item) => (
            <article key={item.name} className="rounded-3xl border border-line bg-white p-6">
              <p className="text-sm text-signal">{item.group}</p>
              <h2 className="display mt-2 text-3xl">{item.name}</h2>
              <p className="mt-3 text-ink-soft">{item.note}</p>
            </article>
          ))}
        </div>
        {visible.length === 0 ? <p className="mt-8 text-ink-soft">Nothing matches that filter. Try another group or clear the search.</p> : null}
      </section>
      <CtaBand title="If your specialty is not listed, ask." body="The list is representative. The question is whether the documentation and the payers behave in a way we already know how to run." />
    </>
  );
}
