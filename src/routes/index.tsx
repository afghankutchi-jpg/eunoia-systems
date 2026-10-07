import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CtaBand, FaqList, SectionIntro } from "@/components/site/blocks";
import { TrajectoryChart } from "@/components/site/chart-panel";
import { ClaimBeads, CycleStory, Marquee, RevenueDial } from "@/components/site/graphics";
import { Reveal } from "@/components/site/motion";
import { audiences, company, proof, services, specialties, testimonials, values } from "@/lib/site";

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hidden md:block">
          <img src="/images/lobby.jpg" alt="" className="photo-ken h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 hidden bg-gradient-to-r from-paper via-paper/90 to-paper/35 md:block" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="overflow-hidden rounded-3xl md:hidden">
          <img src="/images/lobby.jpg" alt="Empty clinic lobby in violet morning light" className="photo-ken h-56 w-full object-cover" />
        </div>
        <div className="md:col-span-7">
          <p className="text-sm font-medium tracking-wide text-signal">Austin, Texas · Revenue cycle management</p>
          <h1 className="display mt-4 text-5xl text-ink md:text-7xl">Revenue that keeps time with care.</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Eunoia Systems runs the financial machinery of a practice — from the schedule to the last balance — so clinicians stay with patients and cash stops leaking between the encounter and the bank.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" search={{ interest: "" }} className="tap inline-flex min-h-12 items-center rounded-full bg-pine px-6 font-medium text-paper">
              Request a revenue review
            </Link>
            <Link to="/process" className="tap inline-flex min-h-12 items-center rounded-full border border-line bg-white px-6 font-medium text-ink">
              See the cycle
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted">{company.tagline}</p>
        </div>
        <div className="min-w-0 md:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-6">
            <img src="/images/rings.jpg" alt="" className="photo-ken pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35" />
            <div className="relative">
              <RevenueDial />
              <div className="mt-4">
                <ClaimBeads />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Marquee items={specialties.map((item) => item.name)} />

      <section className="photo-band relative overflow-hidden">
        <img
          src="/images/corridor.jpg"
          alt="Empty clinic corridor lit in violet, with no signage and no people"
          className="photo-ken h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-pine/50" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-6xl items-end px-5 py-8">
          <p className="display max-w-xl text-3xl text-paper md:text-5xl">The room stays with the patient. The ledger does not.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {proof.map((item) => (
            <div key={item.label} className="bg-white px-6 py-8">
              <p className="display text-4xl text-pine">{item.figure}</p>
              <p className="mt-2 text-ink-soft">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <SectionIntro
          eyebrow="Three pressures"
          title="The work practices actually call about."
          body="Value contracts, a process held together by memory, and patient balances nobody wants to explain. Each has its own page because each has its own fix."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { href: "/services/value-based-care" as const, slug: "value-based-care", kicker: "Contracts", title: "Value-based care", body: "Shift reimbursement without gambling the fee-for-service cash that still pays the payroll." },
            { href: "/services/medical-billing" as const, slug: "medical-billing", kicker: "Operations", title: "A process with a clock", body: "Charges, claims, posting, and follow-up on a cadence — not when someone finds an hour." },
            { href: "/services/patient-financials" as const, slug: "patient-financials", kicker: "Patients", title: "Balances people pay", body: "Estimates and statements written so a patient can settle them without a translator." },
          ].map((card) => (
            <Reveal key={card.title}>
              <Link to="/services/$slug" params={{ slug: card.slug }} className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 hover:border-signal">
                <p className="text-sm text-signal">{card.kicker}</p>
                <h3 className="display mt-3 text-3xl">{card.title}</h3>
                <p className="mt-3 flex-1 text-ink-soft">{card.body}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-signal">
                  Read the service <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro eyebrow="Services" title="Eight practices. One standard of finish." body="Take the full cycle or a single station. The definitions stay the same either way." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 40}>
              <Link to="/services/$slug" params={{ slug: service.slug }} className="group grid gap-3 rounded-3xl border border-line bg-white p-6 md:grid-cols-[auto_1fr] md:gap-6">
                <span className="display text-signal">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="flex items-start justify-between gap-4">
                    <span className="display text-3xl">{service.title}</span>
                    <ArrowUpRight className="mt-1 h-5 w-5 text-muted group-hover:text-signal" />
                  </span>
                  <span className="mt-3 block text-ink-soft">{service.summary}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 md:py-4">
          <CycleStory />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro eyebrow="Practices" title="Built for the way care is organized." />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {audiences.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-3xl bg-paper-2 p-6">
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Link to="/who-we-serve" className="mt-6 inline-flex items-center gap-1 font-medium text-signal">
          Who we serve <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionIntro
            eyebrow="An operating picture"
            title="Toward a 98% clean claim."
            body="An illustrative eight-month trajectory toward the published standards: first-pass acceptance near 98%, denial percentage coming down. It is a model of the work, not one client’s ledger."
          />
        </div>
        <div className="rounded-3xl border border-line bg-white p-4 md:col-span-7 md:p-6">
          <TrajectoryChart />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro eyebrow="From the practices" title="What changes when someone owns the worklist." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item) => (
            <Reveal key={item.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-6">
                <blockquote className="flex-1 text-lg text-ink">“{item.quote}”</blockquote>
                <figcaption className="mt-6 text-sm text-muted">
                  <span className="font-medium text-ink">{item.name}</span> · {item.practice}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Link to="/results" className="mt-6 inline-flex items-center gap-1 font-medium text-signal">
          All results and letters <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="bg-pine text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-medium tracking-wide text-copper">How we work</p>
          <h2 className="display mt-3 max-w-3xl text-4xl md:text-5xl">Five commitments. No softer version in the proposal.</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-5">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="display text-2xl">{value.title}</h3>
                <p className="mt-2 text-sm text-signal-2">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionIntro eyebrow="Questions" title="Before you send a chart export." />
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
