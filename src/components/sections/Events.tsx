"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Placeholder — ativar quando tiver eventos
export function Events() {
  return (
    <section id="events" className="relative py-32 px-6">
      <div className="section-divider max-w-7xl mx-auto mb-32" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
            Eventos
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-4">
            Proximas <span className="gradient-text">datas</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-mono text-sm text-foreground-muted max-w-lg mb-16">
            Em breve.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
