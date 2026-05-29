"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

const THETA = 0.3;
const GLOBE_CSS = 280; // CSS pixels
const LABEL_HALF = 9;  // half of 18px label circle

const MARKERS = [
  { location: [42.28, -83.74] as [number, number], size: 0.07, title: "Ann Arbor, MI" },
  { location: [37.57, 126.98] as [number, number], size: 0.07, title: "Seoul, Korea" },
];

function project(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
  size: number
): { x: number; y: number; visible: boolean } {
  const λ = (lng * Math.PI) / 180;
  const φ = (lat * Math.PI) / 180;

  // 3D unit-sphere coordinates
  const x0 = Math.cos(φ) * Math.sin(λ);
  const y0 = Math.sin(φ);
  const z0 = Math.cos(φ) * Math.cos(λ);

  // Rotate around Y-axis by phi
  const x1 = x0 * Math.cos(phi) + z0 * Math.sin(phi);
  const z1 = -x0 * Math.sin(phi) + z0 * Math.cos(phi);
  const y1 = y0;

  // Rotate around X-axis by theta
  const y2 = y1 * Math.cos(theta) - z1 * Math.sin(theta);
  const z2 = y1 * Math.sin(theta) + z1 * Math.cos(theta);
  const x2 = x1;

  const r = size / 2 - 4;
  return {
    x: size / 2 + x2 * r,
    y: size / 2 - y2 * r,
    visible: z2 > 0,
  };
}

export function MapMyVisitors() {
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!open || !canvasRef.current) return;
    let rafId: number;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 560,
      height: 560,
      phi: 0,
      theta: THETA,
      dark: 0,
      diffuse: 1.1,
      mapSamples: 16000,
      mapBrightness: 5.5,
      baseColor: [0.96, 0.94, 0.92],
      markerColor: [0.18, 0.44, 0.92],
      glowColor: [0.88, 0.85, 0.82],
      markers: MARKERS.map((m) => ({ location: m.location, size: m.size })),
    });

    const animate = () => {
      phiRef.current += 0.008;
      globe.update({ phi: phiRef.current });

      MARKERS.forEach((marker, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const pos = project(
          marker.location[0],
          marker.location[1],
          phiRef.current,
          THETA,
          GLOBE_CSS
        );
        el.style.left = `${pos.x - LABEL_HALF}px`;
        el.style.top = `${pos.y - LABEL_HALF}px`;
        el.style.opacity = pos.visible ? "1" : "0";
      });

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
        <>
          <div className="mt-2 flex justify-center">
            <div style={{ position: "relative", width: GLOBE_CSS, height: GLOBE_CSS }}>
              <canvas ref={canvasRef} style={{ width: GLOBE_CSS, height: GLOBE_CSS }} />
              {MARKERS.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => { labelRefs.current[i] = el; }}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.88)",
                    border: "1.5px solid #2a6bf0",
                    color: "#2a6bf0",
                    fontSize: 10,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    userSelect: "none",
                    opacity: 0,
                    lineHeight: 1,
                  }}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-1.5 flex justify-center gap-5">
            {MARKERS.map((m, i) => (
              <span key={i} className="text-xs text-stone-500">
                <span style={{ color: "#2a6bf0", fontWeight: 700 }}>{i + 1}</span>
                {" "}{m.title}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
