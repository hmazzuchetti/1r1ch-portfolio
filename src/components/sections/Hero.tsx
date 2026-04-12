"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FEATURES } from "@/lib/constants";
import { withPrefix } from "@/lib/prefix";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video / Gradient background */}
      <div className="absolute inset-0 bg-background">
        {FEATURES.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          <>
            <div className="absolute inset-0 mesh-bg" />
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full opacity-20 blur-[80px] sm:blur-[120px]"
              style={{ background: "var(--accent)" }}
              animate={{
                x: ["-20%", "20%", "-20%"],
                y: ["-10%", "10%", "-10%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute right-0 bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-10 blur-[60px] sm:blur-[100px]"
              style={{ background: "var(--accent-bright)" }}
              animate={{
                x: ["10%", "-15%", "10%"],
                y: ["5%", "-10%", "5%"],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity, scale, y }}
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={withPrefix("/images/logo.png")}
            alt="1R1CH"
            width={500}
            height={140}
            className="w-[70vw] md:w-[50vw] lg:w-[40vw] max-w-[500px] h-auto"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-accent-bright mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech House de Curitiba para o mundo
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="font-mono text-sm md:text-base text-foreground-muted mt-4 tracking-[0.15em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          DJ &amp; Produtor
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <MagneticButton
            as="a"
            href="#music"
            className="px-8 py-3 bg-accent text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:bg-accent-light transition-colors glow"
          >
            Ouvir Agora
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            className="px-8 py-3 border border-border text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:border-accent hover:text-accent-bright transition-colors"
          >
            Booking
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground-dim">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-accent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
