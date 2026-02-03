"use client";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/components/ProjectModal";

export default function ProjectsSection({
  projects,
  onSelect,
}: {
  projects: Project[];
  onSelect: (p: Project) => void;
}) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} onClick={() => onSelect(p)} />
        ))}
      </div>
    </section>
  );
}
