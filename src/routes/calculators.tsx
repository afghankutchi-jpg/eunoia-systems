import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { PageHero } from "@/components/site/blocks";

export const Route = createFileRoute("/calculators")({
  head: () => ({
    meta: [
      { title: "Calculators · Eunoia Systems" },
      {
        name: "description",
        content:
          "Days in A/R, net collection rate, denial rate, and first-pass acceptance. The formulas are shown. Nothing is stored.",
      },
    ],
  }),
  component: CalculatorsPage,
});

function CalculatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Four figures a practice can check itself."
        lede="Nothing is stored. These are the ordinary billing ratios, written out so the result is not a black box. They describe a period you choose. They are not a promise about a future month."
      />
      <div className="mx-auto max-w-3xl px-5">
        <DaysInAr />
        <NetCollection />
        <DenialRate />
        <FirstPass />
      </div>
      <p className="mx-auto max-w-3xl px-5 py-16 text-sm text-muted">
        Days in A/R uses gross charges. Net collection uses payments against charges after contractual adjustments. Denial rate and first-pass acceptance use claim counts, not dollars. A good month on one of them can still hide a problem on another.
      </p>
    </>
  );
}

function DaysInAr() {
  const [ar, setAr] = useState("");
  const [charges, setCharges] = useState("");
  const [days, setDays] = useState("30");
  const total = num(ar);
  const billed = num(charges);
  const span = num(days);
  const ready = total != null && billed != null && span != null && billed > 0 && span > 0;
  const value = ready ? total / (billed / span) : null;
  return (
    <Calculator
      title="Days in A/R"
      formula="Accounts receivable ÷ (charges ÷ days in the period)"
      result={value == null ? null : value.toLocaleString("en-US", { maximumFractionDigits: 1 })}
      unit="days"
      reading={
        value == null
          ? "Enter the open A/R, the charges for the period, and how many days that period covers."
          : value < 40
            ? "A tight book. Most of the money is still inside a normal payment cycle. Still look at anything older than 90 days."
            : value < 50
              ? "Inside a range many practices can live with. The number that matters next is how much of this is past 90 days."
              : "The book is holding more than a month and a half of charges. Sort it by what can still be paid before treating the whole balance as slow."
      }
    >
      <Field label="Total accounts receivable" prefix="$" value={ar} onChange={setAr} />
      <Field label="Charges in the period" prefix="$" value={charges} onChange={setCharges} />
      <Field label="Days in the period" value={days} onChange={setDays} />
    </Calculator>
  );
}

function NetCollection() {
  const [payments, setPayments] = useState("");
  const [charges, setCharges] = useState("");
  const [adjustments, setAdjustments] = useState("");
  const paid = num(payments);
  const billed = num(charges);
  const adj = num(adjustments);
  const allowable = billed != null && adj != null ? billed - adj : null;
  const ready = paid != null && allowable != null && allowable > 0;
  const value = ready ? (paid / allowable) * 100 : null;
  const bad = paid != null && billed != null && adj != null && allowable != null && allowable <= 0;
  return (
    <Calculator
      title="Net collection rate"
      formula="Payments ÷ (charges − contractual adjustments)"
      result={value == null ? null : value.toLocaleString("en-US", { maximumFractionDigits: 1 })}
      unit="%"
      reading={
        bad
          ? "Contractual adjustments are meeting or exceeding charges, so there is no allowable left to measure."
          : value == null
            ? "Enter payments, charges, and the contractual adjustments for the same period."
            : value >= 98
              ? "Nearly all of the allowable is being collected. Keep patient balances separate so they do not get credit for this."
              : value >= 95
                ? "Most of the contracted amount is arriving. The rest is usually denials, timely filing, or patient A/R."
                : "A meaningful share of allowable revenue is not arriving. Split insurance A/R from patient A/R before deciding where to work."
      }
    >
      <Field label="Payments" prefix="$" value={payments} onChange={setPayments} />
      <Field label="Charges" prefix="$" value={charges} onChange={setCharges} />
      <Field label="Contractual adjustments" prefix="$" value={adjustments} onChange={setAdjustments} />
    </Calculator>
  );
}

function DenialRate() {
  const [denied, setDenied] = useState("");
  const [submitted, setSubmitted] = useState("");
  const bad = num(denied);
  const sent = num(submitted);
  const over = bad != null && sent != null && bad > sent;
  const ready = bad != null && sent != null && sent > 0 && !over;
  const value = ready ? (bad / sent) * 100 : null;
  return (
    <Calculator
      title="Denial rate"
      formula="Denied claims ÷ claims submitted"
      result={value == null ? null : value.toLocaleString("en-US", { maximumFractionDigits: 1 })}
      unit="%"
      reading={
        over
          ? "Denied claims cannot be higher than the claims submitted in the same period."
          : value == null
            ? "Use claim counts, not dollars. Include only claims with a denial, not rejections that were corrected the same day, unless that is the definition you want to keep."
            : value < 5
              ? "Low. Name the causes anyway, so a quiet month does not hide one payer."
              : value < 10
                ? "High enough for a monthly list of the top three reasons. One of them is usually registration, authorization, or a code."
                : "The appeal queue is now a process. Sort by what can still be paid, and send the repeating cause back to the step that made it."
      }
    >
      <Field label="Claims denied" value={denied} onChange={setDenied} />
      <Field label="Claims submitted" value={submitted} onChange={setSubmitted} />
    </Calculator>
  );
}

function FirstPass() {
  const [accepted, setAccepted] = useState("");
  const [submitted, setSubmitted] = useState("");
  const clean = num(accepted);
  const sent = num(submitted);
  const over = clean != null && sent != null && clean > sent;
  const ready = clean != null && sent != null && sent > 0 && !over;
  const value = ready ? (clean / sent) * 100 : null;
  return (
    <Calculator
      title="First-pass acceptance"
      formula="Claims accepted on the first submission ÷ claims submitted"
      result={value == null ? null : value.toLocaleString("en-US", { maximumFractionDigits: 1 })}
      unit="%"
      reading={
        over
          ? "Accepted claims cannot be higher than the claims submitted."
          : value == null
            ? "Count claims accepted without a return for correction. This is not the same as dollars paid."
            : value >= 98
              ? "Meets the operating standard used on this site: 98% accepted on the first pass. It still does not mean every charge was paid."
              : value >= 95
                ? "Close. The returns are usually eligibility, a missing authorization, a diagnosis pointer, or a modifier."
                : "Below the standard. Read four weeks of rejects by cause before adding staff. More people will not fix a registration error."
      }
    >
      <Field label="Accepted on the first submission" value={accepted} onChange={setAccepted} />
      <Field label="Claims submitted" value={submitted} onChange={setSubmitted} />
    </Calculator>
  );
}

function Calculator({
  title,
  formula,
  result,
  unit,
  reading,
  children,
}: {
  title: string;
  formula: string;
  result: string | null;
  unit: string;
  reading: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line py-14">
      <h2 className="display text-4xl">{title}</h2>
      <p className="mt-3 text-sm text-muted">{formula}</p>
      <div className="mt-8 grid gap-4">{children}</div>
      <p className="display mt-8 text-5xl text-signal">
        {result ?? "—"}
        {result ? <span className="ml-2 text-2xl text-ink-soft">{unit}</span> : null}
      </p>
      <p className="mt-4 max-w-xl text-ink-soft">{reading}</p>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      <span className="relative">
        {prefix ? <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted">{prefix}</span> : null}
        <input
          className={`field ${prefix ? "pl-8" : ""}`}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </span>
    </label>
  );
}

function num(value: string) {
  const trimmed = value.trim().replace(/[$,]/g, "");
  if (!trimmed) return null;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}
