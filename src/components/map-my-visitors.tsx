"use client";

import { useState } from "react";

const MAP_IMG_URL =
  "https://mapmyvisitors.com/map.png?d=XX51c4aOOh2OQm10KNfLEwc4iyOnS0YF5455gNsRRK4&cl=ffffff&w=a&t=n&cmn=3acc3a&cmo=20b220";

export function MapMyVisitors() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        aria-expanded={open}
      >
        <span className="text-[10px]">{open ? "▾" : "▸"}</span>
        Visitor Map
      </button>
      {open && (
        <div className="mt-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={MAP_IMG_URL}
            alt="Visitor map"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
