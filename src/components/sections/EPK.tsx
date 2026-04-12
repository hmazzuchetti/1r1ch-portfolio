"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIAL_LINKS } from "@/lib/constants";

const EPK_SECTIONS = [
  {
    title: "Bio",
    description: "Short and full biography ready for press and promoters.",
  },
  {
    title: "Photos",
    description: "High-resolution press photos. Landscape and portrait formats.",
  },
  {
    title: "Music",
    description: "Latest releases, mixes and DJ sets across all platforms.",
  },
  {
    title: "Tech Rider",
    description: "Equipment requirements and stage setup preferences.",
  },
  {
    title: "Stats",
    description: "Follower counts, monthly listeners, and play statistics.",
  },
  {
    title: "Video",
    description: "Live performance footage showcasing stage presence and skill.",
  },
];

export function EPK() {
  return (
    <section id="epk" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="section-divider max-w-7xl mx-auto mb-16 md:mb-32" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
                Press Kit
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-8">
                Electronic
                <br />
                <span className="gradient-text">press kit</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-foreground-muted leading-relaxed mb-8 max-w-md">
                Everything you need to book 1R1CH or feature in press. Download
                the full EPK package or browse the sections below.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <MagneticButton
                as="a"
                href="/epk/1R1CH-EPK.pdf"
                className="inline-block px-8 py-3 bg-accent text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:bg-accent-light transition-colors glow"
              >
                Download EPK (PDF)
              </MagneticButton>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim mb-4">
                  Find 1R1CH on
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-border font-mono text-xs uppercase tracking-[0.1em] text-foreground-muted hover:border-accent hover:text-accent-bright transition-all"
                      data-cursor-hover
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: EPK cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EPK_SECTIONS.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.08} direction="right">
                <div className="glass p-6 h-full">
                  <div className="w-8 h-px bg-accent mb-4" />
                  <h3 className="font-bold uppercase tracking-[-0.01em] text-lg mb-2">
                    {section.title}
                  </h3>
                  <p className="font-mono text-xs text-foreground-dim leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
