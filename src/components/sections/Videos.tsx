"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SETS } from "@/lib/constants";

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="section-divider max-w-7xl mx-auto mb-16 md:mb-32" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
            Sets
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-4">
            Live <span className="gradient-text">sessions</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-mono text-sm text-foreground-muted max-w-lg mb-16">
            Sets gravados ao vivo.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SETS.map((set, i) => (
            <ScrollReveal key={set.youtubeId} delay={0.1 * i}>
              <button
                className="group relative w-full aspect-video overflow-hidden rounded-lg cursor-pointer focus:outline-none"
                onClick={() => setActiveVideo(set.youtubeId)}
                aria-label={`Assistir ${set.title}`}
              >
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${set.youtubeId}/maxresdefault.jpg`}
                  alt={set.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-accent/80 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-bright mb-1">
                    {set.venue}
                  </p>
                  <p className="font-bold text-white text-sm sm:text-base">{set.title}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest"
              onClick={() => setActiveVideo(null)}
            >
              ✕ fechar
            </button>
            <motion.div
              className="w-full max-w-4xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
