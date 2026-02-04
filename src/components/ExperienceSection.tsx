"use client";
import { motion } from "framer-motion";

type Item = {
  type: "Work" | "Education";
  title: string;
  org: string;
  location?: string;
  period: string;
  points: string[];
};

const ITEMS: Item[] = [
  {
    type: "Work",
    title: "Software Engineer",
    org: "Global Cloud Media Pvt Ltd",
    location: "Sri Lanka",
    period: "2022 – 2024",
    points: [
      "Delivered full-stack features using modern JS/TS and backend services.",
      "Implemented APIs, UI components, and improvements to system stability.",
      "Worked closely with QA and product to ship iterative enhancements.",
    ],
  },
  {
    type: "Education",
    title: "BSc (Hons) in Information Technology (Software Engineering)",
    org: "Sri Lanka Institute of Information Technology / SLIIT",
    location: "Sri Lanka",
    period: "2020 – 2024",
    points: [
      "Focused on software engineering fundamentals, databases, and web development.",
      "Completed projects involving full-stack applications and system design.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">
        Experience{" "}
        <span className="bg-linear-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))] bg-clip-text text-transparent">
          Timeline
        </span>
      </h2>

      <div className="relative">
        {/* vertical line */}
        <div
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{ backgroundColor: "rgba(var(--accent), 0.35)" }}
        />

        <div className="space-y-6">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="relative pl-10"
            >
              {/* dot */}
              <div
                className="absolute left-1.75 top-6 h-3 w-3 rounded-full"
                style={{
                  backgroundColor: "rgb(var(--accent))",
                  boxShadow: `
                    0 0 0 6px rgba(255,255,255,0.04),
                    0 0 25px rgba(var(--accent2), 0.25)
                  `,
                }}
              />

              <div className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      {/* type badge */}
                      <span
                        className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 border"
                        style={{
                          borderColor: "rgba(var(--accent), 0.45)",
                          color: "rgba(var(--accent), 0.95)",
                        }}
                      >
                        {item.type}
                      </span>

                      <h3 className="text-lg md:text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 mt-1">
                      {item.org}
                      {item.location ? (
                        <span className="text-gray-500"> • {item.location}</span>
                      ) : null}
                    </p>
                  </div>

                  {/* period pill */}
                  <span
                    className="text-xs bg-white/5 border px-3 py-1 rounded-full"
                    style={{
                      borderColor: "rgba(var(--accent2), 0.35)",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                  {item.points.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "rgba(var(--accent2), 0.9)" }}
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
