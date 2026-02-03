"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Let’s build something
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mb-10">
          If you have a project in mind (web app, dashboard, LMS/ERP, API integration),
          I’m available for new work. Send me a message and I’ll respond quickly.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="thimesh.madusanka19@gmail.com"
            className="px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:bg-mint"
          >
            Email Me
          </a>

          <a
            href="https://github.com/ThimeshMnk"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:text-mint hover:border-mint transition-all"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thimesh-madusanka/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:text-mint hover:border-mint transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
