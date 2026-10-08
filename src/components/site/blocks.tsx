import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { faqs } from "@/lib/site";
import { Reveal } from "@/components/site/motion";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-sm font-medium tracking-wide text-signal">{eyebrow}</p>
          <h1 className="display mt-4 text-4xl text-ink md:text-6xl">{title}</h1>
        </div>
        <p className="text-lg text-ink-soft md:col-span-5 md:pt-14">{lede}</p>
      </div>
    </header>
  );
}

export function CtaBand({
  title = "Bring the cycle into one conversation.",
  body = "Tell us what is leaking — denials, aging, enrollment, or a front desk that never quite catches up. We will say plainly whether we are the right team.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-pine text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-4xl md:text-5xl">{title}</h2>
          <p className="mt-4 text-signal-2">{body}</p>
        </div>
        <Link
          to="/contact"
          search={{ interest: "" }}
          className="tap inline-flex min-h-12 items-center justify-center rounded-full bg-signal px-6 font-medium text-on-gold"
        >
          Request a revenue review
        </Link>
      </div>
    </section>
  );
}

export function FaqList({ items = faqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-6 text-lg font-medium text-ink">
            {item.q}
            <span className="text-signal transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <Reveal>
      <p className="text-sm font-medium tracking-wide text-signal">{eyebrow}</p>
      <h2 className="display mt-3 max-w-3xl text-4xl text-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 max-w-2xl text-lg text-ink-soft">{body}</p> : null}
    </Reveal>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5">{children}</div>;
}
