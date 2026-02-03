"use client";
import { motion } from "framer-motion";

const STACK = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Laravel", "Node.js", "REST APIs", "Auth / RBAC"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Linux"] },
  { title: "Data", items: ["PostgreSQL", "MySQL", "Redis", "Observability"] },
];

export default function StackSection() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STACK.map((block, idx) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
          >
            <h3 className="font-semibold mb-4 text-white">{block.title}</h3>

            <div className="flex flex-wrap gap-2">
              {block.items.map((item) => (
                <span
                  key={item}
                  className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
