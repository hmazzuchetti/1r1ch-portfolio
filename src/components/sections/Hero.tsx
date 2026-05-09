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
            {/* Golden ambient glow for the note */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] sm:w-[700px] sm:h-[450px] md:w-[900px] md:h-[550px] rounded-full opacity-15 blur-[100px] sm:blur-[140px]"
              style={{ background: "linear-gradient(135deg, #c9a84c, #8b6914, #daa520)" }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full opacity-15 blur-[80px] sm:blur-[120px]"
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
              className="absolute right-0 bottom-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full opacity-8 blur-[60px] sm:blur-[100px]"
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

      {/* Dark overlay - slightly lighter to let the note pop */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Floating 100 Reais Note - Background centerpiece */}
      <motion.div
        className="absolute z-[5] note-container"
        style={{ perspective: 1200 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative"
          animate={{
            rotateY: [-5, 5, -5],
            rotateX: [3, -2, 3],
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="note-shimmer">
            <Image
              src={withPrefix("/images/note-100.jpg")}
              alt="1R1CH 100 Reais"
              width={800}
              height={450}
              className="w-[85vw] sm:w-[65vw] md:w-[55vw] lg:w-[45vw] max-w-[700px] h-auto rounded-lg note-shadow"
              priority
            />
            {/* Shimmer sweep overlay */}
            <div className="note-shimmer-overlay" />
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ opacity, scale, y }}
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={withPrefix("/images/logo.png")}
            alt="1R1CH"
            width={500}
            height={140}
            className="w-[60vw] md:w-[40vw] lg:w-[30vw] max-w-[400px] h-auto drop-shadow-[0_0_30px_rgba(218,165,32,0.3)]"
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

        {/* Spacer to push buttons below the note */}
        <div className="h-[30vh] sm:h-[28vh] md:h-[25vh]" />

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <MagneticButton
            as="a"
            href="#music"
            wrapperClassName="w-full sm:w-auto sm:inline-block"
            className="block w-full sm:w-auto px-8 py-3 bg-accent text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:bg-accent-light transition-colors glow text-center"
          >
            Ouvir Agora
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            wrapperClassName="w-full sm:w-auto sm:inline-block"
            className="block w-full sm:w-auto px-8 py-3 border border-border text-foreground font-mono text-sm uppercase tracking-[0.15em] hover:border-accent hover:text-accent-bright transition-colors text-center"
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
