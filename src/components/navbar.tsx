"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home",         href: "#home",              type: "scroll"   },
  { label: "News",         href: "#news",              type: "scroll"   },
  { label: "Publications", href: "#publications",      type: "scroll"   },
  { label: "Blog",         href: "/blog/index.html",   type: "internal" },
] as const;

const SCROLL_SECTIONS = ["home", "news", "publications"] as const;

export function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SCROLL_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-[980px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Site name */}
        <a
          href="#home"
          className="text-xl font-extrabold text-stone-800 hover:text-stone-500 transition-colors"
        >
          Byeongju Woo
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.type === "scroll" && active === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                className={`text-sm font-bold transition-colors ${
                  isActive
                    ? "text-stone-900"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-stone-500 hover:text-stone-900 text-lg leading-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-stone-200 bg-[#FFFFFF] px-6 py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.type === "external" ? "_blank" : undefined}
              rel={item.type === "external" ? "noopener noreferrer" : undefined}
              className="text-base font-semibold text-stone-600 hover:text-stone-900 py-2 border-b border-stone-100 last:border-0 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
