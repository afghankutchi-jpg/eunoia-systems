import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site/blocks";
import { company, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    interest: typeof search.interest === "string" ? search.interest : "",
  }),
  head: () => ({
    meta: [
      { title: "Contact · Eunoia Systems" },
      { name: "description", content: "Request a revenue cycle review from Eunoia Systems in Austin. Call +1 (512) 709-9079 or write info@eunoiasystems.com." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { interest } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const practice = String(data.get("practice") ?? "").trim();
    const topic = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || !email.includes("@") || practice.length < 2 || message.length < 12) {
      setError("Add a name, a real email, the practice, and a short description of the problem.");
      setSent(false);
      return;
    }
    const body = [`Name: ${name}`, `Email: ${email}`, `Practice: ${practice}`, `Interest: ${topic}`, "", message].join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(`Revenue review · ${practice}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
    window.location.href = href;
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where the cycle breaks."
        lede="A revenue review starts with the symptom: denials, aging, a new clinician who cannot be paid yet, or a front desk that is also the billing department."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12">
        <form onSubmit={onSubmit} className="grid gap-4 md:col-span-7" noValidate>
          <label className="grid gap-2 text-sm font-medium">
            Name
            <input className="field" name="name" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Work email
            <input className="field" name="email" type="email" autoComplete="email" required />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Practice
            <input className="field" name="practice" required />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            Where should we look
            <select className="field" name="topic" defaultValue={interest}>
              <option value="">The whole cycle</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-medium">
            What is happening
            <textarea className="field min-h-36" name="message" required />
          </label>
          {error ? <p className="text-danger">{error}</p> : null}
          {sent ? <p className="text-signal">Your email app should open with this note addressed to {company.email}. If it does not, write us directly.</p> : null}
          <button type="submit" className="tap min-h-12 rounded-full bg-signal px-6 font-medium text-on-gold">
            Open email to Eunoia
          </button>
          <p className="text-sm text-muted">
            The form does not store what you type. It opens a message to {company.email} on your own mail app. Do not include clinical records.
          </p>
        </form>
        <aside className="md:col-span-5">
          <img src="/images/consult.jpg" alt="A doctor and patient in conversation at a small clinic" className="mb-6 aspect-[4/3] w-full rounded-3xl object-cover" />
          <div className="rounded-3xl bg-pine p-8 text-ivory">
            <p className="text-sm tracking-wide text-copper">Direct</p>
            <a href={company.phoneHref} className="display mt-4 block text-3xl">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="mt-2 block text-signal-2">{company.email}</a>
            <p className="mt-8 text-signal-2">
              {company.address}
              <br />
              {company.city}
            </p>
            <p className="mt-4 text-sm text-signal-2">{company.hours}</p>
          </div>
        </aside>
      </section>
    </>
  );
}
