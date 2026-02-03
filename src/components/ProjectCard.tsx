"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageSrc?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc = "/images/project-cover.png",
  onClick,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[rgba(var(--accent),0.7)] transition-all cursor-pointer group"
    >
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-linear-to-br from-gray-800 to-gray-900">
        <Image
          src={imageSrc}
          alt={`${title} cover`}
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
