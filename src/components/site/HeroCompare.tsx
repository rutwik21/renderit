import { useRef, useState, type PointerEvent } from "react";
import wireframe from "@/assets/render-wireframe.jpg";
import render from "@/assets/render-hero.jpg";

export function HeroCompare() {
  const [pos, setPos] = useState(58);
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef(false);

  const update = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  const onDown = (e: PointerEvent) => {
    drag.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: PointerEvent) => {
    if (!drag.current) return;
    update(e.clientX);
  };
  const onUp = () => (drag.current = false);

  return (
    <div
      ref={ref}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border-strong cursor-ew-resize select-none surface-card"
      style={{ touchAction: "none" }}
    >
      <img
        src={render}
        alt="Photorealistic AI render of a modern tropical villa"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1200}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={wireframe}
          alt="SketchUp wireframe of the same model"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          width={1536}
          height={1024}
          style={{ filter: "saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-background/30 mix-blend-multiply" />
      </div>

      <div className="absolute top-4 left-4 label-eyebrow bg-background/60 backdrop-blur px-2.5 py-1 rounded-md border border-border">
        SketchUp
      </div>
      <div className="absolute top-4 right-4 label-eyebrow bg-background/60 backdrop-blur px-2.5 py-1 rounded-md border border-border text-foreground">
        RenderIt
      </div>

      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full bg-white/80" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 rounded-full bg-grad-brand grid place-items-center shadow-[0_10px_30px_-6px_rgba(107,77,255,0.7)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
