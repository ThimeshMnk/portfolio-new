"use client";

import { useMemo, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectModal, { Project } from "@/components/ProjectModal";
import TechMarquee from "@/components/TechMarquee";
import ExperienceSection from "@/components/ExperienceSection";
import StackSection from "@/components/StackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollToTopOnRefresh from "@/components/ScrollToTopOnRefresh";

export default function Home() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "AI Logs System",
        description:
          "An intelligent monitoring dashboard built with TypeScript. Focuses on real-time log analysis and system health visualization.",
        tags: ["TypeScript", "Real-time Data", "Node.js"],
        link: "https://github.com/ThimeshMnk/AI_Logs_System",
        imageSrc: "/images/project-cover.png",
        details: [
          "Real-time log streaming & filtering",
          "Health metrics + alerts dashboard",
          "Designed for extensibility and scale",
        ],
      },
      {
        title: "LMS Full-Stack Ecosystem",
        description:
          "A comprehensive E-learning platform featuring a TypeScript frontend and a Laravel/Blade backend. Managed via Docker and Kubernetes.",
        tags: ["Laravel", "TypeScript", "Docker", "Kubernetes"],
        link: "https://github.com/ThimeshMnk/LMS-frontend",
        imageSrc: "/images/project-cover.png",
        details: [
          "Role-based access (admin/teacher/student)",
          "Course delivery + quizzes + progress tracking",
          "Containerized deployment workflow",
        ],
      },
      {
        title: "Next-Gen ERP/POS UI",
        description:
          "Enterprise-grade Point of Sale interface designed for high-frequency retail environments. Focuses on state management and speed.",
        tags: ["React", "TypeScript", "Enterprise UI"],
        link: "https://github.com/ThimeshMnk/erp_pos_new_ui",
        imageSrc: "/images/project-cover.png",
        details: [
          "Fast workflows optimized for retail operations",
          "Strong state management patterns",
          "Reusable UI components for scalability",
        ],
      },
      {
        title: "NASA API Discovery Tool",
        description:
          "A specialized frontend application that fetches and visualizes deep-space data using NASA's Open APIs.",
        tags: ["API Integration", "Data Visualization", "React"],
        link: "https://github.com/your-username/Frontend-NASA-Api",
        imageSrc: "/images/project-cover.png",
        details: [
          "API data visualization and filtering",
          "Clean UI for browsing datasets",
          "Caching for improved performance",
        ],
      },
      {
        title: "Villa Oceanora Booking",
        description:
          "A localized real-world booking system developed to handle villa reservations with a focus on local language support.",
        tags: ["JavaScript", "UX Design", "Localisation"],
        link: "https://github.com/ThimeshMnk/villa-oceanora-info",
        imageSrc: "/images/project-cover.png",
        details: [
          "Booking workflows & calendar logic",
          "Localization-first UI decisions",
          "Mobile-friendly experience",
        ],
      },

      {
      title: "Breast-Cancer-Detection",
      description:
        "A breast cancer detection project using Python and Machine Learning models, focused on training and evaluating classifiers for medical prediction.",
      tags: ["Python", "Machine Learning", "AI", "Classification"],
      link: "https://github.com/ThimeshMnk/DL-Assignment-Breast-Cancer-Detection",
      imageSrc: "/images/project-cover.png",
      details: [
        "Built and evaluated multiple ML classification models",
        "Data preprocessing, feature analysis, and model comparison",
        "Focused on accuracy and reliable performance metrics",
      ],
    },
    {
      title: "Niroshine",
      description:
        "A modern website for an Australian cleaning service business, designed for performance, SEO, and smooth user experience with Next.js.",
      tags: ["Next.js", "React", "SEO", "UI/UX"],
      link: "https://github.com/ThimeshMnk/Niroshine", 
      imageSrc: "/images/project-cover.png",
      details: [
        "Responsive design for mobile + desktop",
        "Optimized pages for SEO and fast loading",
        "Service pages, contact flow, and clean branding layout",
      ],
    },
    {
      title: "Tellida Website",
      description:
        "An informational website for a Sri Lankan company built with React, featuring a clean layout, responsive pages, and a modern UI.",
      tags: ["React", "JavaScript", "Responsive UI", "Website"],
      link: "https://github.com/ThimeshMnk/Tellida_new", 
      imageSrc: "/images/project-cover.png",
      details: [
        "Company profile + services presentation pages",
        "Reusable React components and responsive styling",
        "Structured content for clarity and readability",
      ],
    },
    {
      title: "Que_generation",
      description:
        "A quiz generation app that uses OpenAI LLMs to generate questions for SLIIT English content, enabling faster content creation and practice.",
      tags: ["OpenAI", "LLM", "Quiz App", "Education"],
      link: "https://github.com/ThimeshMnk/Que_generation",
      imageSrc: "/images/project-cover.png",
      details: [
        "Prompt-driven question generation for learning content",
        "Structured outputs suitable for quizzes and practice sessions",
        "Focused on usability for educational workflows",
      ],
    },
    ],
    []
  );

  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="relative">
        <ScrollToTopOnRefresh />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <TechMarquee />

      <StackSection />
      <ExperienceSection />

      <ProjectsSection projects={projects} onSelect={setSelected} />

      <ContactSection />
      <Footer />

      <ProjectModal
        open={!!selected}
        project={selected}
        onClose={() => setSelected(null)}
      />
    </main>
  );
}
