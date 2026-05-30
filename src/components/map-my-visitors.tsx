"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";

const THETA = 0.3;
const GLOBE_CSS = 280;
const LABEL_SIZE = 18;

const MARKERS = [
  { location: [42.28, -83.74] as [number, number], size: 0.07, title: "Ann Arbor, MI" },
  { location: [37.57, 126.98] as [number, number], size: 0.07, title: "Seoul, Korea" },
];

// Exact port of cobe's internal U() function: lat/lng → unit sphere [x, y, z]
function toCartesian(lat: number, lng: number): [number, number, number] {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180;
  const cosLat = Math.cos(latR);
  return [cosLat * Math.cos(lngR), Math.sin(latR), -cosLat * Math.sin(lngR)];
}

// Exact port of cobe's W() → O() projection (square canvas, scale=1, offset=[0,0])
// Elevation 0.85 = sphere radius 0.8 + default markerElevation 0.05
function projectMarker(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
  cssSize: number
): { x: number; y: number; visible: boolean } {
  const [x0, y0, z0] = toCartesian(lat, lng);
  const r = 0.85;
  const x = x0 * r, y = y0 * r, z = z0 * r;

  const cosPhi = Math.cos(phi), sinPhi = Math.sin(phi);
  const cosTheta = Math.cos(theta), sinTheta = Math.sin(theta);

  const c = cosPhi * x + sinPhi * z;
  const s = sinPhi * sinTheta * x + cosTheta * y - cosPhi * sinTheta * z;
  const depth = -sinPhi * cosTheta * x + sinTheta * y + cosPhi * cosTheta * z;

  return {
    x: ((c + 1) / 2) * cssSize,
    y: ((-s + 1) / 2) * cssSize,
    visible: depth > 0.15,
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
      markers: [],
    });

    const animate = () => {
      phiRef.current += 0.008;
      globe.update({ phi: phiRef.current });

      MARKERS.forEach((marker, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const pos = projectMarker(
          marker.location[0],
          marker.location[1],
          phiRef.current,
          THETA,
          GLOBE_CSS
        );
        el.style.left = `${pos.x - LABEL_SIZE / 2}px`;
        el.style.top = `${pos.y - LABEL_SIZE / 2}px`;
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
                    width: LABEL_SIZE,
                    height: LABEL_SIZE,
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
