"use client";
import { motion } from "framer-motion";

const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Laravel",
  "Node.js",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "CI/CD",
  "REST APIs",
  "Cloud",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-3 py-3 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...TECH, ...TECH].map((t, idx) => (
          <span
            key={`${t}-${idx}`}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs uppercase tracking-widest"
          >
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-6 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold">Core Tools</h3>
            <p className="text-gray-400 text-sm mt-1">
              Technologies I use to build fast, scalable products.
            </p>
          </div>
        </div>

        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
