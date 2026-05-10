import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DSMNYjcz.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const logo = "/assets/renderit-logo-BO0xGpsW.png";
const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl border-b border-border/60" : "border-b border-transparent"}`,
      style: { backgroundColor: scrolled ? "rgba(6,7,13,0.78)" : "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "RenderIt", width: 28, height: 28, className: "rounded-md" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-semibold tracking-tight", children: [
              "Render",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "It" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#download", className: "btn-brand text-sm hidden sm:inline-flex", children: "Download" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                "aria-label": "Toggle menu",
                onClick: () => setOpen((v) => !v),
                className: "md:hidden h-9 w-9 grid place-items-center rounded-md border border-border",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-4 h-px bg-foreground mb-1" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block w-4 h-px bg-foreground" })
                ]
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border bg-background/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 flex flex-col gap-3", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            onClick: () => setOpen(false),
            className: "text-sm text-muted-foreground hover:text-foreground py-1.5",
            children: l.label
          },
          l.href
        )) }) })
      ]
    }
  );
}
const wireframe = "/assets/render-wireframe-B5kV8aAI.jpg";
const heroRender = "/assets/render-hero-j1KzsRwt.jpg";
function HeroCompare() {
  const [pos, setPos] = reactExports.useState(58);
  const ref = reactExports.useRef(null);
  const drag = reactExports.useRef(false);
  const update = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = (clientX - rect.left) / rect.width * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };
  const onDown = (e) => {
    drag.current = true;
    e.target.setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e) => {
    if (!drag.current) return;
    update(e.clientX);
  };
  const onUp = () => drag.current = false;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      onPointerDown: onDown,
      onPointerMove: onMove,
      onPointerUp: onUp,
      onPointerLeave: onUp,
      className: "relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border-strong cursor-ew-resize select-none surface-card",
      style: { touchAction: "none" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: heroRender,
            alt: "Photorealistic AI render of a modern tropical villa",
            className: "absolute inset-0 w-full h-full object-cover",
            width: 1920,
            height: 1200
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: wireframe,
                  alt: "SketchUp wireframe of the same model",
                  className: "absolute inset-0 w-full h-full object-cover",
                  loading: "lazy",
                  width: 1536,
                  height: 1024,
                  style: { filter: "saturate(0.8)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/30 mix-blend-multiply" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 label-eyebrow bg-background/60 backdrop-blur px-2.5 py-1 rounded-md border border-border", children: "SketchUp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 label-eyebrow bg-background/60 backdrop-blur px-2.5 py-1 rounded-md border border-border text-foreground", children: "RenderIt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute top-0 bottom-0",
            style: { left: `${pos}%`, transform: "translateX(-50%)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-px h-full bg-white/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 rounded-full bg-grad-brand grid place-items-center shadow-[0_10px_30px_-6px_rgba(107,77,255,0.7)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 6l-6 6 6 6M15 6l6 6-6 6" }) }) })
            ]
          }
        )
      ]
    }
  );
}
function Reveal({ children, delay = 0, as: As = "div", className = "" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.style.transitionDelay = `${delay}ms`;
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(As, { ref, className: `reveal ${className}`, children });
}
const currencies = {
  USD: { symbol: "$", lite: 29, plus: 49, studio: 119 },
  INR: { symbol: "₹", lite: 2399, plus: 3999, studio: 9899 },
  EUR: { symbol: "€", lite: 27, plus: 45, studio: 109 }
};
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
      "Priority support"
    ]
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
      "Edit-region regeneration"
    ]
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
      "Dedicated success manager"
    ]
  }
];
function Pricing() {
  const [cur, setCur] = reactExports.useState("USD");
  const c = currencies[cur];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex p-1 rounded-full border border-border bg-surface/60 backdrop-blur", children: Object.keys(currencies).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCur(k),
        className: `px-4 py-1.5 text-xs font-medium rounded-full transition-all ${cur === k ? "bg-grad-brand text-white" : "text-muted-foreground hover:text-foreground"}`,
        children: k
      },
      k
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: tiers.map((t) => {
      const price = c[t.key];
      const featured = "featured" in t && t.featured;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative surface-card p-7 flex flex-col ${featured ? "!border-[color-mix(in_oklab,var(--primary)_55%,transparent)] glow-brand" : ""}`,
          children: [
            featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 bg-grad-brand text-white text-[11px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold", children: "Most Popular" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "label-eyebrow", children: [
                t.credits.split(" ")[0],
                " cr"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: t.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-5xl font-bold tracking-tight", children: [
                c.symbol,
                price.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "/mo" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-4 w-4 rounded-full bg-grad-brand grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12l5 5L20 7" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f })
            ] }, f)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#download",
                className: `mt-8 ${featured ? "btn-brand" : "btn-ghost-line"} justify-center`,
                children: "Get Started"
              }
            )
          ]
        },
        t.key
      );
    }) })
  ] });
}
const items = [
  {
    q: "What is RenderIt?",
    a: "RenderIt is an AI-powered plugin and desktop app that turns SketchUp 3D models into photorealistic architectural renders in seconds — no render farm, no waiting."
  },
  {
    q: "Do I need a powerful computer to use RenderIt?",
    a: "No. All rendering happens in the cloud. Any modern laptop that can run SketchUp can run RenderIt."
  },
  {
    q: "Which version of SketchUp is supported?",
    a: "SketchUp 2021 and newer on Windows. macOS support is coming soon."
  },
  {
    q: "How many credits does one render cost?",
    a: "A Fast render uses ~10 credits. An Ultra render uses ~30. Video generation and 4K upscales cost more — see the in-app credit calculator."
  },
  {
    q: "Can I use renders commercially?",
    a: "Yes. Every paid plan includes a full commercial license for client work and presentations."
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every new account gets free starter credits to try Fast renders, edit tools, and style presets."
  }
];
function Faq() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: items.map((it, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `surface-card overflow-hidden ${isOpen ? "border-[color-mix(in_oklab,var(--primary)_45%,var(--border))]" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-6 text-left px-6 py-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-base sm:text-lg", children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `h-8 w-8 grid place-items-center rounded-full border transition-all ${isOpen ? "bg-grad-brand border-transparent" : "border-border"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        className: `transition-transform ${isOpen ? "rotate-45 text-white" : "text-muted-foreground"}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14" })
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid transition-all duration-300",
              style: { gridTemplateRows: isOpen ? "1fr" : "0fr" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 text-muted-foreground leading-relaxed max-w-3xl", children: it.a }) })
            }
          )
        ]
      },
      it.q
    );
  }) });
}
const g1 = "/assets/gallery-1-BzWg-tfT.jpg";
const g2 = "/assets/gallery-2-BoYGrE2o.jpg";
const g3 = "/assets/gallery-3-B7uapJub.jpg";
const g4 = "/assets/gallery-4-Cr-9U2yg.jpg";
const features = [{
  title: "One-Click Render",
  desc: "Capture your SketchUp viewport and generate a photorealistic image with a single click.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 7h3l2-3h6l2 3h3v12H4z M12 11a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" })
}, {
  title: "AI Style Presets",
  desc: "Choose from curated architectural styles — modern tropical, evening ambiance, minimalist interior, and more.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" })
}, {
  title: "Edit & Regenerate",
  desc: "Paint over regions you want to change. The AI regenerates only the masked area.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3" })
}, {
  title: "Reference Images",
  desc: "Upload mood boards or reference photos to guide the AI's output.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 5h16v14H4z M4 16l5-5 4 4 3-3 4 4" })
}, {
  title: "4K Upscaling",
  desc: "Upscale any render to ultra-high resolution for client presentations.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 12h4l3-7 4 14 3-7h4" })
}, {
  title: "Video Generation",
  desc: "Generate animated architectural walkthroughs from your renders.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 5h13v14H3zM16 9l5-3v12l-5-3z" })
}];
const steps = [{
  n: "01",
  title: "Design in SketchUp",
  desc: "Model your architecture in SketchUp as you normally would.",
  img: wireframe
}, {
  n: "02",
  title: "Click Render",
  desc: "Open the RenderIt panel, choose your style, and hit Render.",
  img: g1
}, {
  n: "03",
  title: "Get Results",
  desc: "Receive a photorealistic image in under 30 seconds. Save, edit, or upscale.",
  img: heroRender
}];
const gallery = [{
  src: g1,
  label: "Scandinavian — Interior, Daylight"
}, {
  src: heroRender,
  label: "Modern Tropical — Exterior, Golden Hour"
}, {
  src: g2,
  label: "Brutalist — Exterior, Evening"
}, {
  src: g3,
  label: "Luxury Hospitality — Interior"
}, {
  src: g4,
  label: "Corporate — Facade, Daytime"
}];
const firms = ["GENSLER", "BIG", "SOM", "FOSTER+", "MVRDV", "ZAHA", "OMA", "HERZOG"];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "relative min-h-screen overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow w-[1200px] h-[800px] -top-40 left-1/2 -translate-x-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow w-[800px] h-[600px] top-[1200px] -left-40 opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow w-[900px] h-[700px] top-[2400px] -right-40 opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-36 pb-24 lg:pt-48 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 backdrop-blur text-xs text-muted-foreground mb-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-grad-brand" }),
            "RenderIt v2 · Powered by Gemini"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Transform your 3D models into" }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "photorealistic renders" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: " — instantly." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed", children: "RenderIt uses AI to turn your SketchUp viewport into stunning architectural visuals. No render farm. No waiting. Just click Render." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#download", className: "btn-brand", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" }) }),
              "Download for Windows"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#how", className: "btn-ghost-line", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" }) }),
              "Watch Demo"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 280, className: "mt-16 lg:mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-10 bg-grad-brand opacity-25 blur-3xl rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCompare, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-3", children: "Drag to compare — SketchUp model → RenderIt output" })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center label-eyebrow mb-8", children: "Trusted by 2,000+ architects and designers worldwide" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap", style: {
          width: "max-content"
        }, children: [...firms, ...firms, ...firms].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-semibold tracking-[0.25em] text-foreground/30", children: f }, i)) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-28 lg:py-36 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient", children: "Everything you need to render." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "A focused toolset built for architects — from one-click renders to fine-grained edits and 4K finals." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "surface-card p-7 h-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-grad-brand grid place-items-center mb-6 glow-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: f.icon }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: f.desc })
        ] }) }, f.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "py-28 lg:py-36 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Workflow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient", children: "Three steps to photorealism." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 grid md:grid-cols-3 gap-8 lg:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-7 left-[16%] right-[16%] border-t border-dashed border-border-strong" }),
          steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-14 w-14 rounded-full bg-background border border-border-strong grid place-items-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full p-px bg-grad-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-full bg-background grid place-items-center font-display font-semibold text-sm", children: s.n }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold mb-2", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xs leading-relaxed", children: s.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 surface-card overflow-hidden w-full aspect-[4/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", className: "w-full h-full object-cover" }) })
          ] }) }, s.n))
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "gallery", className: "py-28 lg:py-36 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Showcase" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient", children: "See what RenderIt can do." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-sm", children: "Real renders generated from real SketchUp models — across interiors, exteriors, and lighting moods." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5", children: gallery.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, className: i === 1 ? "row-span-2 col-span-2 lg:col-span-2 lg:row-span-2" : "", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "group relative surface-card overflow-hidden h-full aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.src, alt: g.label, loading: "lazy", className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "absolute left-5 bottom-4 text-xs text-foreground/80 tracking-wide", children: g.label })
        ] }) }, g.label)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "py-28 lg:py-36 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow w-[700px] h-[500px] top-1/3 left-1/2 -translate-x-1/2 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center max-w-2xl mx-auto mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient", children: "Simple plans. Real renders." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Pick a credit pack that matches your studio's pace." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-28 lg:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl lg:text-5xl font-semibold tracking-tight text-gradient", children: "Questions, answered." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "download", className: "py-32 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ambient-glow w-[1100px] h-[700px] top-0 left-1/2 -translate-x-1/2 opacity-90 animate-[glow-pulse_5s_ease-in-out_infinite]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl lg:text-6xl font-bold tracking-tight text-gradient", children: "Ready to transform your workflow?" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Join thousands of architects using AI to render faster than ever." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 180, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn-brand mt-10 px-7 py-3.5 text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" }) }),
            "Download RenderIt"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border pt-16 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "RenderIt", width: 28, height: 28, className: "rounded-md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-semibold", children: [
                "Render",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: "It" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed", children: "From sketch to photorealism — in seconds. By Gray Atelier." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Product" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground transition-colors", children: "Features" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground transition-colors", children: "Pricing" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#download", className: "hover:text-foreground transition-colors", children: "Download" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "label-eyebrow mb-4", children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Support" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground transition-colors", children: "Terms of Service" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "© 2026 Gray Atelier. All rights reserved." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: ["X", "IG", "IN"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": s, className: "h-8 w-8 grid place-items-center rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-border-strong transition-colors", children: s }, s)) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
