"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { withPrefix } from "@/lib/prefix";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Artist photo */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden group">
              <Image
                src={withPrefix("/images/artist-photo.jpeg")}
                alt="1R1CH"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
              {/* Accent border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-px bg-accent" />
              <div className="absolute top-0 left-0 w-px h-8 bg-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-accent" />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
                Sobre
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-8">
                Tech House de
                <br />
                <span className="gradient-text">Curitiba pro mundo</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  1R1CH é a expressão de uma paixão pelo Tech House — um som que
                  vive na interseção entre groove, textura e sensação. De
                  Curitiba para onde a música levar, cada set é uma busca por
                  aquele momento em que a pista inteira se conecta num ritmo só.
                </p>
                <p>
                  Apaixonado por criar, por explorar camadas sonoras e por
                  transformar energia em movimento. Cada produção nasce da
                  vontade de provocar algo — seja um arrepio, um sorriso ou
                  aquele head nod involuntário.
                </p>
                <p>
                  Em constante aprendizado, buscando oportunidades para
                  aprimorar e evoluir como DJ e produtor. O caminho é tão
                  importante quanto o destino.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-6 md:gap-12 mt-10">
                <div>
                  <p className="text-3xl font-bold gradient-text">—</p>
                  <p className="font-mono text-xs text-foreground-dim uppercase tracking-widest mt-1">
                    Curitiba, BR
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">—</p>
                  <p className="font-mono text-xs text-foreground-dim uppercase tracking-widest mt-1">
                    Tech House
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">—</p>
                  <p className="font-mono text-xs text-foreground-dim uppercase tracking-widest mt-1">
                    DJ & Produtor
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
