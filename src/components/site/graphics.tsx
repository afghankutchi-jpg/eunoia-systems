import { useEffect, useState } from "react";
import { cycle } from "@/lib/site";

const stages = ["Access", "Verify", "Document", "Submit", "Post", "Resolve"];
const beads = ["Scheduled", "Verified", "Coded", "Scrubbed", "Submitted", "Accepted", "Posted", "Collected"];

export function RevenueDial() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="pulse-ring absolute inset-[12%] rounded-full border border-signal-2" aria-hidden />
      <svg viewBox="0 0 240 240" className="relative h-full w-full overflow-hidden" role="img" aria-label="Looping revenue cycle">
        <circle cx="120" cy="120" r="92" fill="none" className="stroke-line" strokeWidth="1" />
        <circle cx="120" cy="120" r="74" fill="none" className="stroke-paper-2" strokeWidth="10" />
        <circle
          cx="120"
          cy="120"
          r="74"
          fill="none"
          className="dial-spin stroke-signal"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray="70 396"
        />
        {stages.map((stage, index) => {
          const angle = (index / stages.length) * Math.PI * 2 - Math.PI / 2;
          const x = 120 + Math.cos(angle) * 86;
          const y = 120 + Math.sin(angle) * 86;
          return (
            <text
              key={stage}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-ink"
              style={{ fontSize: "9px", fontFamily: "Outfit, sans-serif", letterSpacing: "0.08em" }}
            >
              {stage.toUpperCase()}
            </text>
          );
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 dial-spin" aria-hidden>
        <span className="absolute left-1/2 top-[9%] h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-copper shadow" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-16 w-36">
          {stages.map((stage, index) => (
            <p
              key={stage}
              className="stage-word display absolute inset-0 flex items-center justify-center text-2xl text-pine"
              style={{ animationDelay: `${index * 3}s` }}
            >
              {stage}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClaimBeads() {
  const row = [...beads, ...beads];
  return (
    <div className="min-w-0 overflow-hidden" aria-label="Claim status loop">
      <div className="bead flex w-max gap-3 py-1">
        {row.map((bead, index) => (
          <span
            key={`${bead}-${index}`}
            aria-hidden={index >= beads.length}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft"
          >
            {bead}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee w-full max-w-full overflow-hidden border-y border-pine-2 bg-pine text-paper">
      <div className="marquee-track flex w-max">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8 px-4 py-4 text-sm tracking-wide" aria-hidden={index >= items.length}>
            {item}
            <span className="text-copper" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function CycleStory() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const track = document.getElementById("cycle-track");
    if (!track) return;
    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const total = track.offsetHeight - window.innerHeight;
      const walked = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const next = Math.min(cycle.length - 1, Math.floor((walked / Math.max(total, 1)) * cycle.length));
      setStep(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <ol className="grid gap-4 md:hidden">
        {cycle.map((item) => (
          <li key={item.id} className="rounded-3xl border border-line bg-white p-5">
            <p className="text-sm text-signal">{item.id}</p>
            <h3 className="display mt-2 text-2xl">{item.title}</h3>
            <p className="mt-2 text-ink-soft">{item.body}</p>
          </li>
        ))}
      </ol>
      <div id="cycle-track" className="cycle-track relative hidden md:block">
        <div className="cycle-pin grid grid-cols-12 items-center gap-10 py-16">
          <div className="col-span-5">
            <p className="text-sm font-medium tracking-wide text-signal">The cycle, in order</p>
            <h2 className="display mt-3 text-5xl">Six movements. One ledger.</h2>
            <p className="mt-4 text-ink-soft">
              Scroll and the work changes station. Nothing downstream can repair a step that was skipped upstream.
            </p>
            <div className="mt-8 flex gap-2">
              {cycle.map((item, index) => (
                <span key={item.id} className={`h-1.5 flex-1 rounded-full ${index <= step ? "bg-signal" : "bg-line"}`} />
              ))}
            </div>
          </div>
          <div className="col-span-7 rounded-3xl bg-pine p-10 text-paper">
            <p className="text-sm tracking-widest text-copper">{cycle[step]?.id}</p>
            <h3 className="display mt-3 text-5xl">{cycle[step]?.title}</h3>
            <p className="mt-4 max-w-xl text-lg text-signal-2">{cycle[step]?.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
