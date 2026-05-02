"use client";
import { useEffect, useMemo, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    const NAV_OFFSET = 140; 
    const getActive = () => {
      const scrollPos = window.scrollY + NAV_OFFSET;

      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActive(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    window.addEventListener("resize", getActive);

    return () => {
      window.removeEventListener("scroll", getActive);
      window.removeEventListener("resize", getActive);
    };
  }, [sectionIds]);

  const goTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
<nav className="fixed top-0 w-full z-9999 pointer-events-auto bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <button
          onClick={() => goTo("home")}
          className="text-2xl font-black text-white tracking-tighter"
        >
          T<span className="text-mint">M</span>
        </button>

        <div className="hidden md:flex gap-10 text-gray-400 font-semibold text-sm uppercase tracking-widest relative">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              className={`hover:text-mint transition-colors ${
                active === s.id ? "text-white" : ""
              }`}
            >
              {s.label}
            </button>
          ))}

         
          <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-white/10">
            <div
              className="h-0.5 bg-mint transition-all duration-300"
              style={{
                width: `${100 / SECTIONS.length}%`,
                transform: `translateX(${SECTIONS.findIndex((s) => s.id === active) * 100}%)`,
              }}
            />
          </div>
        </div>

       {/* <a
  href="/resume.pdf"
  className="..."
  onClick={(e) => {
    e.preventDefault();
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  }}
>
  Resume.pdf
</a> */}
      </div>
    </nav>
  );
}
