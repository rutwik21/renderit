import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroCompare } from "@/components/site/HeroCompare";
import { Reveal } from "@/components/site/Reveal";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import logo from "@/assets/renderit-logo.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import heroRender from "@/assets/render-hero.jpg";
import wireframe from "@/assets/render-wireframe.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const features = [
  {
    title: "One-Click Render",
    desc: "Capture your SketchUp viewport and generate a photorealistic image with a single click.",
    icon: (
      <path d="M4 7h3l2-3h6l2 3h3v12H4z M12 11a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    ),
  },
  {
    title: "AI Style Presets",
    desc: "Choose from curated architectural styles — modern tropical, evening ambiance, minimalist interior, and more.",
    icon: <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
  },
  {
    title: "Edit & Regenerate",
    desc: "Paint over regions you want to change. The AI regenerates only the masked area.",
    icon: <path d="M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" />,
  },
  {
    title: "Reference Images",
    desc: "Upload mood boards or reference photos to guide the AI's output.",
    icon: <path d="M4 5h16v14H4z M4 16l5-5 4 4 3-3 4 4" />,
  },
  {
    title: "4K Upscaling",
    desc: "Upscale any render to ultra-high resolution for client presentations.",
    icon: <path d="M3 12h4l3-7 4 14 3-7h4" />,
  },
  {
    title: "Video Generation",
    desc: "Generate animated architectural walkthroughs from your renders.",
    icon: <path d="M3 5h13v14H3zM16 9l5-3v12l-5-3z" />,
  },
];

const steps = [
  { n: "01", title: "Design in SketchUp", desc: "Model your architecture in SketchUp as you normally would.", img: wireframe },
  { n: "02", title: "Click Render", desc: "Open the RenderIt panel, choose your style, and hit Render.", img: g1 },
  { n: "03", title: "Get Results", desc: "Receive a photorealistic image in under 30 seconds. Save, edit, or upscale.", img: heroRender },
];

const gallery = [
  { src: g1, label: "Scandinavian — Interior, Daylight" },
  { src: heroRender, label: "Modern Tropical — Exterior, Golden Hour" },
  { src: g2, label: "Brutalist — Exterior, Evening" },
  { src: g3, label: "Luxury Hospitality — Interior" },
  { src: g4, label: "Corporate — Facade, Daytime" },
];

const firms = ["GENSLER", "BIG", "SOM", "FOSTER+", "MVRDV", "ZAHA", "OMA", "HERZOG"];

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <Nav />

      {/* Ambient glows */}
      <div className="ambient-glow w-[1200px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />
      <div className="ambient-glow w-[800px] h-[600px] top-[1200px] -left-40 opacity-60" />
      <div className="ambient-glow w-[900px] h-[700px] top-[2400px] -right-40 opacity-60" />

      <main className="relative">
        {/* HERO */}
        <section className="pt-36 pb-24 lg:pt-48 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-4xl mx-auto">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 backdrop-blur text-xs text-muted-foreground mb-7">
                  <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" />
                  RenderIt v2 · Powered by Gemini
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight">
                  <span className="text-gradient">Transform your 3D models into</span>{" "}
                  <span className="text-gradient-brand">photorealistic renders</span>
                  <span className="text-gradient"> — instantly.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  RenderIt uses AI to turn your SketchUp viewport into stunning architectural visuals.
                  No render farm. No waiting. Just click Render.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <a href="#download" className="btn-brand">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                    </svg>
                    Download for Windows
                  </a>
                  <a href="#how" className="btn-ghost-line">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Demo
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={280} className="mt-16 lg:mt-20">
              <div className="relative">
                <div className="absolute -inset-10 bg-grad-brand opacity-25 blur-3xl rounded-full" />
                <div className="relative">
                  <HeroCompare />
                  <p className="text-center text-xs text-muted-foreground mt-3">Drag to compare — SketchUp model → RenderIt output</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="py-16 border-y border-border/60">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="text-center label-eyebrow mb-8">Trusted by 2,000+ architects and designers worldwide</p>
            </Reveal>
            <div className="relative overflow-hidden">
              <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap" style={{ width: "max-content" }}>
                {[...firms, ...firms, ...firms].map((f, i) => (
                  <span key={i} className="font-display text-2xl font-semibold tracking-[0.25em] text-foreground/30">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-28 lg:py-36 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="max-w-2xl">
              <p className="label-eyebrow mb-4">Features</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                Everything you need to render.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                A focused toolset built for architects — from one-click renders to fine-grained edits and 4K finals.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="surface-card p-7 h-full">
                    <div className="h-11 w-11 rounded-xl bg-grad-brand grid place-items-center mb-6 glow-brand">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        {f.icon}
                      </svg>
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-28 lg:py-36 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="text-center max-w-2xl mx-auto">
              <p className="label-eyebrow mb-4">Workflow</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                Three steps to photorealism.
              </h2>
            </Reveal>
            <div className="relative mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="hidden md:block absolute top-7 left-[16%] right-[16%] border-t border-dashed border-border-strong" />
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 100} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-14 w-14 rounded-full bg-background border border-border-strong grid place-items-center mb-6">
                      <div className="absolute inset-0 rounded-full p-px bg-grad-brand">
                        <div className="h-full w-full rounded-full bg-background grid place-items-center font-display font-semibold text-sm">
                          {s.n}
                        </div>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">{s.desc}</p>
                    <div className="mt-7 surface-card overflow-hidden w-full aspect-[4/3]">
                      <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-28 lg:py-36 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <p className="label-eyebrow mb-4">Showcase</p>
                <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                  See what RenderIt can do.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Real renders generated from real SketchUp models — across interiors, exteriors, and lighting moods.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {gallery.map((g, i) => (
                <Reveal
                  key={g.label}
                  delay={i * 60}
                  className={i === 1 ? "row-span-2 col-span-2 lg:col-span-2 lg:row-span-2" : ""}
                >
                  <figure className="group relative surface-card overflow-hidden h-full aspect-[4/3]">
                    <img src={g.src} alt={g.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent" />
                    <figcaption className="absolute left-5 bottom-4 text-xs text-foreground/80 tracking-wide">
                      {g.label}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-28 lg:py-36 relative">
          <div className="ambient-glow w-[700px] h-[500px] top-1/3 left-1/2 -translate-x-1/2 opacity-50" />
          <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
            <Reveal className="text-center max-w-2xl mx-auto mb-12">
              <p className="label-eyebrow mb-4">Pricing</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                Simple plans. Real renders.
              </h2>
              <p className="mt-5 text-muted-foreground text-lg">Pick a credit pack that matches your studio's pace.</p>
            </Reveal>
            <Reveal delay={120}>
              <Pricing />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-28 lg:py-36">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal className="text-center mb-14">
              <p className="label-eyebrow mb-4">FAQ</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                Questions, answered.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Faq />
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="download" className="py-32 relative">
          <div className="ambient-glow w-[1100px] h-[700px] top-0 left-1/2 -translate-x-1/2 opacity-90 animate-[glow-pulse_5s_ease-in-out_infinite]" />
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <h2 className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
                Ready to transform your workflow?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg text-muted-foreground">
                Join thousands of architects using AI to render faster than ever.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a href="#" className="btn-brand mt-10 px-7 py-3.5 text-base">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
                </svg>
                Download RenderIt
              </a>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-border pt-16 pb-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid md:grid-cols-4 gap-10">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2.5">
                  <img src={logo} alt="RenderIt" width={28} height={28} className="rounded-md" />
                  <span className="font-display text-lg font-semibold">
                    Render<span className="text-gradient-brand">It</span>
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
                  From sketch to photorealism — in seconds. By Gray Atelier.
                </p>
              </div>
              <div>
                <p className="label-eyebrow mb-4">Product</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                  <li><a href="#download" className="hover:text-foreground transition-colors">Download</a></li>
                </ul>
              </div>
              <div>
                <p className="label-eyebrow mb-4">Company</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">© 2026 Gray Atelier. All rights reserved.</p>
              <div className="flex items-center gap-3">
                {["X", "IG", "IN"].map((s) => (
                  <a key={s} href="#" aria-label={s} className="h-8 w-8 grid place-items-center rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
