"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

export function MapMyVisitors() {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!open || !canvasRef.current) return;
    let phi = 0;
    let rafId: number;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 560,
      height: 560,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.1,
      mapSamples: 16000,
      mapBrightness: 5.5,
      baseColor: [0.96, 0.94, 0.92],
      markerColor: [0.18, 0.44, 0.92],
      glowColor: [0.88, 0.85, 0.82],
      markers: [
        { location: [42.28, -83.74], size: 0.07 }, // Ann Arbor
        { location: [37.57, 126.98], size: 0.07 },  // Seoul
      ],
    });

    const animate = () => {
      phi += 0.004;
      globe.update({ phi });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      globe.destroy();
    };
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        aria-expanded={open}
      >
        <span className="text-[10px]">{open ? "▾" : "▸"}</span>
        Visitor Globe
      </button>
      {open && (
        <div className="mt-2 flex justify-center">
          <canvas
            ref={canvasRef}
            style={{ width: 280, height: 280 }}
          />
        </div>
      )}
    </div>
  );
}
