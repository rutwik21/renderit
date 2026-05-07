import { useState } from "react";

const currencies = {
  USD: { symbol: "$", lite: 29, plus: 49, studio: 119 },
  INR: { symbol: "₹", lite: 2399, plus: 3999, studio: 9899 },
  EUR: { symbol: "€", lite: 27, plus: 45, studio: 109 },
} as const;

type Cur = keyof typeof currencies;

const tiers = [
  {
    key: "lite",
    name: "Lite",
    credits: "1,000 credits / mo",
    desc: "For freelancers exploring AI rendering.",
    features: [
      "100 Fast designs or ~30 Ultra renders",
      "10 video generations",
      "4K upscaling",
      "Commercial license",
      "Priority support",
    ],
  },
  {
    key: "plus",
    name: "Plus",
    credits: "3,000 credits / mo",
    desc: "Most popular for working architects.",
    featured: true,
    features: [
      "300 Fast or 100 Ultra renders",
      "30 video generations",
      "Everything in Lite",
      "Reference image guidance",
      "Edit-region regeneration",
    ],
  },
  {
    key: "studio",
    name: "Studio",
    credits: "10,000 credits / mo",
    desc: "For studios shipping client work daily.",
    features: [
      "1000 Fast or 330 Ultra renders",
      "100 video generations",
      "Everything in Plus",
      "Team seats (coming soon)",
      "Dedicated success manager",
    ],
  },
] as const;

export function Pricing() {
  const [cur, setCur] = useState<Cur>("USD");
  const c = currencies[cur];
  return (
    <div>
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1 rounded-full border border-border bg-surface/60 backdrop-blur">
          {(Object.keys(currencies) as Cur[]).map((k) => (
            <button
              key={k}
              onClick={() => setCur(k)}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                cur === k ? "bg-grad-brand text-white" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((t) => {
          const price = (c as any)[t.key] as number;
          const featured = "featured" in t && t.featured;
          return (
            <div
              key={t.key}
              className={`relative surface-card p-7 flex flex-col ${
                featured
                  ? "!border-[color-mix(in_oklab,var(--primary)_55%,transparent)] glow-brand"
                  : ""
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-grad-brand text-white text-[11px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold">
                  Most Popular
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
                <span className="label-eyebrow">{t.credits.split(" ")[0]} cr</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-bold tracking-tight">
                  {c.symbol}
                  {price.toLocaleString()}
                </span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 h-4 w-4 rounded-full bg-grad-brand grid place-items-center shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`mt-8 ${featured ? "btn-brand" : "btn-ghost-line"} justify-center`}
              >
                Get Started
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
