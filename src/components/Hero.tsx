"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Terminal } from "lucide-react";
import Image from "next/image";
import type { Variants } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background image with gentle floating/parallax */}
      <motion.div
        className="absolute inset-0 z-[0] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/image.png"
            alt="Thimesh Madhusanka"
            fill
            priority
            className="object-contain opacity-45 grayscale translate-y-50 object-left pl-50 lg:scale-110"
          />
        </motion.div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-l from-black via-black/60 to-transparent" />
      </motion.div>

      {/* Animated glow blobs */}
<div className="absolute inset-0 z-[1] pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 h-130 w-130 rounded-full blur-3xl"
          style={{ background: "rgba(var(--accent), 0.18)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-64 -right-48 h-155 w-155 rounded-full blur-3xl"
          style={{ background: "rgba(var(--accent2), 0.14)" }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-24">
        <div className="hidden lg:block" />

        {/* Staggered content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8 md:gap-12"
        >
          {/* Badge + Name */}
          <motion.div variants={slideRight}>
            <motion.div
              variants={item}
              className="flex items-center gap-2 mb-4"
            >
              <motion.span
                initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Terminal size={18} className="text-accent" />
              </motion.span>

              <span className="bg-linear-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))] bg-clip-text text-transparent font-mono text-sm tracking-widest uppercase">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-6xl md:text-8xl lg:text-9xl font-black bg-linear-to-r from-[rgb(var(--accent))] to-[rgb(var(--accent2))] bg-clip-text text-transparent leading-[0.85] tracking-tighter"
            >
              Thimesh <br />
              <span className="block">Madhusanka</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-4"
            >
              <motion.div
                className="w-12 h-px"
                style={{ background: "rgba(var(--accent), 0.6)" }}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 48, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <p className="text-gray-400 font-medium uppercase tracking-[0.3em] text-xs">
                Full-Stack Software Engineer
              </p>
            </motion.div>
          </motion.div>

          {/* Value proposition */}
          <motion.div variants={item} className="max-w-xl">
            <motion.h2
              variants={item}
              className="text-2xl md:text-4xl font-medium text-white/75 mb-6 leading-tight"
            >
              Architecting <span className="font-semibold">Scalable</span>{" "}
              Systems & <br />
              Intelligent Digital Experiences.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              Specializing in building enterprise-grade applications like ERPs
              and LMS platforms. I turn complex backend logic into seamless,
              high-performance user interfaces using Next.js, Laravel, and Cloud
              technologies.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-5">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(var(--accent), 1), rgba(var(--accent2), 1))",
                  color: "black",
                }}
              >
                View Projects
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>

              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/ThimeshMnk"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:border-[rgba(var(--accent),0.7)] transition-all"
                >
                  <Github size={20} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/thimesh-madusanka/"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-full text-white hover:border-[rgba(var(--accent2),0.7)] transition-all"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
