import { useState } from "react";

const items = [
  {
    q: "What is RenderIt?",
    a: "RenderIt is an AI-powered plugin and desktop app that turns SketchUp 3D models into photorealistic architectural renders in seconds — no render farm, no waiting.",
  },
  {
    q: "Do I need a powerful computer to use RenderIt?",
    a: "No. All rendering happens in the cloud. Any modern laptop that can run SketchUp can run RenderIt.",
  },
  {
    q: "Which version of SketchUp is supported?",
    a: "SketchUp 2021 and newer on Windows. macOS support is coming soon.",
  },
  {
    q: "How many credits does one render cost?",
    a: "A Fast render uses ~10 credits. An Ultra render uses ~30. Video generation and 4K upscales cost more — see the in-app credit calculator.",
  },
  {
    q: "Can I use renders commercially?",
    a: "Yes. Every paid plan includes a full commercial license for client work and presentations.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every new account gets free starter credits to try Fast renders, edit tools, and style presets.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={it.q}
            className={`surface-card overflow-hidden ${isOpen ? "border-[color-mix(in_oklab,var(--primary)_45%,var(--border))]" : ""}`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
            >
              <span className="font-medium text-base sm:text-lg">{it.q}</span>
              <span
                className={`h-8 w-8 grid place-items-center rounded-full border transition-all ${
                  isOpen ? "bg-grad-brand border-transparent" : "border-border"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${isOpen ? "rotate-45 text-white" : "text-muted-foreground"}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed max-w-3xl">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
