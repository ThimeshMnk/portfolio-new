"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageSrc?: string;
  details?: string[];
  tech?: string[];
}

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  return (
    <AnimatePresence>
      {open && project && (
        <>
         
          <motion.div
            className="fixed inset-0 z-80 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

  
          <motion.div
            className="fixed inset-0 z-90 flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
          >
            <div
              className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0b0f14] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
           
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">Project overview & key details</p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:text-mint transition"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

          
              <div className="p-6 md:p-8 grid md:grid-cols-5 gap-6">
            
                <div className="md:col-span-2">
                  <div className="h-44 md:h-full rounded-2xl border border-white/10 bg-linear-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                    <div
                      className="absolute inset-0 opacity-25 bg-[url('/grid.svg')] bg-center"
                      aria-hidden
                    />
                    {project.imageSrc ? (
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-90"
                        style={{ backgroundImage: `url(${project.imageSrc})` }}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-black/30" />
                    )}
                    <div className="absolute inset-0 bg-black/35" />
                  </div>
                </div>

                <div className="md:col-span-3">
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="flex gap-2 flex-wrap mt-5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.details?.length ? (
                    <ul className="mt-6 space-y-2 text-gray-400 text-sm">
                      {project.details.map((d, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint/80 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-8 flex items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-mint transition"
                    >
                      View Repository <ExternalLink size={18} />
                    </a>

                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-mint hover:border-mint transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-white/10 text-xs text-gray-500">
                Tip: Click outside the modal or press the Close button to dismiss.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
