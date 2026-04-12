"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { withPrefix } from "@/lib/prefix";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const TOTAL = 5;
const COLLECTED = 0;

export function Collectors() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // More aggressive initial tilt, settles to slight angle
  const rotateY = useTransform(scrollYProgress, [0, 0.45, 1], [-35, -5, 4]);
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [15, 3, -4]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.45, 1], [6, 1, -1]);
  const frameY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const frameScale = useTransform(scrollYProgress, [0, 0.4, 0.6], [0.85, 1, 1.02]);
  // Shadow shifts with rotation
  const shadowX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 3, -5]);
  const shadowBlur = useTransform(scrollYProgress, [0, 0.5, 1], [30, 15, 20]);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="section-divider max-w-7xl mx-auto mb-16 md:mb-32" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Frame with parallax 3D rotation */}
          <ScrollReveal direction="left">
            <div
              className="flex justify-center lg:justify-start"
              style={{ perspective: "900px" }}
            >
              <motion.div
                style={{
                  rotateY,
                  rotateX,
                  rotateZ,
                  y: frameY,
                  scale: frameScale,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                {/* Frame container */}
                <div className="relative w-[260px] h-[341px] xs:w-[300px] xs:h-[394px] sm:w-[384px] sm:h-[504px] md:w-[456px] md:h-[600px] lg:w-[528px] lg:h-[684px]">
                  {/* Frame PNG */}
                  <Image
                    src={withPrefix("/images/frame-v2.png")}
                    alt="Quadro de colecionador"
                    fill
                    className="object-contain relative z-10 drop-shadow-2xl"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                  />

                  {/* Art inside the frame — positioned within the inner area */}
                  <div className="absolute inset-[14%] z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-background-elevated flex flex-col items-center justify-center gap-3">
                      <div className="absolute inset-0 mesh-bg opacity-60" />
                      <div className="relative flex flex-col items-center justify-center gap-4 p-4 text-center">
                        <Image
                          src={withPrefix("/images/logo.png")}
                          alt="1R1CH"
                          width={240}
                          height={68}
                          className="w-[60%] h-auto"
                        />
                        <div className="w-10 h-px bg-accent" />
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.3em] text-foreground-dim">
                          Collector&apos;s Edition
                        </span>
                        <span className="font-mono text-sm sm:text-base text-foreground-dim/60">
                          N&ordm; __ / {TOTAL}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic shadow underneath */}
                  <motion.div
                    className="absolute -bottom-6 left-8 right-8 h-10 bg-black/30 blur-2xl rounded-full -z-10"
                    style={{ x: shadowX, filter: useTransform(shadowBlur, (v) => `blur(${v}px)`) }}
                  />
                </div>

                {/* Glow behind frame */}
                <div className="absolute -inset-12 bg-accent/5 blur-3xl rounded-full -z-20" />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
                Edicao de Colecionador
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-8">
                Os primeiros
                <br />
                <span className="gradient-text">ficam na historia</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  Eu acredito que música não é só som — é conexão. É por isso
                  que os{" "}
                  <strong className="text-foreground">
                    5 primeiros lugares
                  </strong>{" "}
                  que abrirem as portas pro 1R1CH vão receber algo que não se
                  compra: um quadro de colecionador, numerado e único.
                </p>
                <p>
                  Meu propósito é ganhar o mundo, mas sem nunca esquecer
                  Curitiba — a cidade que me moldou. Quero construir relações
                  reais com cada pessoa, cada casa, cada pista que cruzar meu
                  caminho.
                </p>
                <p>
                  Tenho certeza de que vou crescer. A questão não é{" "}
                  <em>se</em>, é <em>quando</em>. E quando esse dia chegar,
                  quem esteve comigo desde o começo vai ter a prova na parede.
                </p>
                <p className="text-foreground">
                  Esse quadro é mais do que arte. É uma promessa de que eu não
                  esqueço quem acreditou primeiro.
                </p>
              </div>
            </ScrollReveal>

            {/* Counter */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10 glass p-6 inline-block">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text tracking-[-0.04em]">
                    {COLLECTED}/{TOTAL}
                  </span>
                  <span className="font-mono text-sm text-foreground-muted">
                    colecionados
                  </span>
                </div>
                <p className="font-mono text-xs text-accent-bright mt-2 uppercase tracking-[0.15em]">
                  Corra e aproveite
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
