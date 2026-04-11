"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SOCIAL_LINKS, BOOKING_EMAIL } from "@/lib/constants";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    eventDate: "",
    venue: "",
    city: "",
    eventType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Abre o email client com os dados do form como fallback
    const subject = encodeURIComponent(
      `Booking Request — ${formState.venue || "Event"} — ${formState.eventDate || "TBD"}`
    );
    const body = encodeURIComponent(
      `Nome: ${formState.name}\nEmail: ${formState.email}\nData: ${formState.eventDate}\nVenue: ${formState.venue}\nCidade: ${formState.city}\nTipo: ${formState.eventType}\n\nMensagem:\n${formState.message}`
    );
    window.open(
      `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`,
      "_self"
    );
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-3 font-mono text-sm text-foreground placeholder:text-foreground-dim focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="section-divider max-w-7xl mx-auto mb-32" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
                Contato
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-8">
                Book
                <br />
                <span className="gradient-text">1R1CH</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-foreground-muted leading-relaxed mb-8 max-w-md">
                Quer o 1R1CH no seu evento? Preenche o formulario ou manda um
                email direto. Resposta em ate 48 horas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="space-y-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim mb-1">
                    Booking / Geral
                  </p>
                  <a
                    href={`mailto:${BOOKING_EMAIL}`}
                    className="font-mono text-sm text-accent-bright hover:text-accent transition-colors"
                    data-cursor-hover
                  >
                    {BOOKING_EMAIL}
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Social links */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-dim mb-4">
                  Redes sociais
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
                      {platform === "appleMusic" ? "Apple Music" : platform}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <ScrollReveal direction="right">
            {isSubmitted ? (
              <motion.div
                className="glass p-8 flex flex-col items-center justify-center min-h-[400px] text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mb-6 glow">
                  <svg
                    className="w-8 h-8 text-accent-bright"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-2">
                  Mensagem Enviada
                </h3>
                <p className="font-mono text-sm text-foreground-muted">
                  Respondemos em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome *"
                    required
                    className={inputClasses}
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className={inputClasses}
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="date"
                    name="eventDate"
                    placeholder="Data do evento"
                    className={inputClasses}
                    value={formState.eventDate}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="venue"
                    placeholder="Nome da casa/venue"
                    className={inputClasses}
                    value={formState.venue}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="city"
                    placeholder="Cidade"
                    className={inputClasses}
                    value={formState.city}
                    onChange={handleChange}
                  />
                  <select
                    name="eventType"
                    className={`${inputClasses} bg-background`}
                    value={formState.eventType}
                    onChange={handleChange}
                  >
                    <option value="">Tipo de evento</option>
                    <option value="club">Club Night</option>
                    <option value="festival">Festival</option>
                    <option value="private">Evento Privado</option>
                    <option value="corporate">Corporativo</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Conta mais sobre o evento..."
                  rows={4}
                  className={`${inputClasses} resize-none`}
                  value={formState.message}
                  onChange={handleChange}
                />
                <MagneticButton
                  className="w-full py-4 px-6 bg-accent text-foreground font-mono text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:bg-accent-light transition-colors glow whitespace-nowrap"
                >
                  Enviar Booking
                </MagneticButton>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
