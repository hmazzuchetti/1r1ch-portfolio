"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { withPrefix } from "@/lib/prefix";
import { SOCIAL_LINKS, SPOTIFY_ARTIST_ID } from "@/lib/constants";

const WHATSAPP_NUMBER = "5541999999999"; // TODO: trocar pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Oi! Vi seu site e quero saber sobre DJ grátis pra um evento. 🎧"
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const EVENT_TYPES = [
  {
    icon: "🎓",
    title: "Formaturas",
    desc: "Pista lotada do começo ao fim",
  },
  {
    icon: "💒",
    title: "Casamentos",
    desc: "Festa que ninguém esquece",
  },
  {
    icon: "❤️",
    title: "Caridade",
    desc: "Causas que importam, som que marca",
  },
  {
    icon: "🎉",
    title: "Festas & Eventos",
    desc: "Aniversários, corporativos, o que vier",
  },
  {
    icon: "🏠",
    title: "House Parties",
    desc: "Som profissional no seu rolê",
  },
  {
    icon: "🎪",
    title: "Feiras & Festivals",
    desc: "Palco grande ou pequeno, entrego igual",
  },
];

const GENRES = ["House", "Tech House", "Techno", "Deep House"];

export default function DJPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] overflow-hidden">
      {/* Grain overlay */}
      <div className="grain" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 mesh-bg" />
          <motion.div
            className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, #0d7377 0%, #14b8bd 40%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, #14b8bd 0%, transparent 70%)",
            }}
            animate={{
              x: ["10%", "-15%", "10%"],
              y: ["5%", "-10%", "5%"],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={withPrefix("/images/logo.png")}
              alt="1R1CH"
              width={400}
              height={112}
              className="w-[50vw] md:w-[30vw] max-w-[300px] h-auto drop-shadow-[0_0_30px_rgba(13,115,119,0.4)]"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full border border-[#0d7377]/50 bg-[#0d7377]/10 font-mono text-xs uppercase tracking-[0.2em] text-[#14b8bd]">
              100% Gratuito
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">DJ</span>
            <span className="block gradient-text">GRÁTIS</span>
          </motion.h1>

          {/* Genres */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {GENRES.map((genre, i) => (
              <span key={genre} className="flex items-center">
                <span className="font-mono text-sm md:text-base uppercase tracking-[0.15em] text-[#f5f5f5]/80">
                  {genre}
                </span>
                {i < GENRES.length - 1 && (
                  <span className="mx-2 text-[#0d7377]">•</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Location */}
          <motion.p
            className="font-mono text-sm md:text-base uppercase tracking-[0.2em] text-[#888] mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            📍 Curitiba e Região
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chamar no WhatsApp
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[rgba(255,255,255,0.08)] hover:border-[#0d7377] text-[#f5f5f5] font-mono text-sm uppercase tracking-[0.15em] rounded-lg transition-all duration-300"
            >
              Saiba Mais ↓
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-px h-8 bg-[#0d7377]"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ========== O QUE EU TOCO ========== */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Som profissional.{" "}
              <span className="gradient-text">Custo zero.</span>
            </h2>
            <p className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              DJ e produtor de música eletrônica com releases no Spotify e sets
              gravados. Toco de graça porque quero palco, experiência e ser
              conhecido. Você ganha uma festa com som profissional.
            </p>
          </motion.div>

          {/* Genre cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {GENRES.map((genre, i) => (
              <motion.div
                key={genre}
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-2xl mb-2">🎵</div>
                <h3 className="font-bold text-lg">{genre}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-2xl mx-auto" />

      {/* ========== TIPOS DE EVENTO ========== */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Toco em <span className="gradient-text">qualquer evento</span>
          </motion.h2>
          <motion.p
            className="text-[#888] text-center mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Só preciso de um espaço e uma tomada. O resto eu resolvo.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((event, i) => (
              <motion.div
                key={event.title}
                className="glass rounded-xl p-8 hover:border-[#0d7377]/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl mb-4">{event.icon}</div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-[#14b8bd] transition-colors">
                  {event.title}
                </h3>
                <p className="text-[#888] text-sm">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-2xl mx-auto" />

      {/* ========== SPOTIFY EMBED ========== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Escuta o <span className="gradient-text">som</span>
            </h2>
            <p className="text-[#888] text-lg">
              Produções próprias no Spotify. Isso é o que toca no teu evento.
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-xl p-4 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-2xl mx-auto" />

      {/* ========== POR QUE GRÁTIS ========== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que <span className="gradient-text">grátis?</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Quero ser conhecido",
                text: "Estou construindo meu nome na cena. Cada evento é uma oportunidade de mostrar meu trabalho pra um público novo.",
              },
              {
                num: "02",
                title: "Preciso de palco",
                text: "DJ que não toca não evolui. Preciso de horas de pista, feedback real, e a pressão de entregar ao vivo.",
              },
              {
                num: "03",
                title: "Win-win",
                text: "Você economiza no DJ. Eu ganho experiência, conteúdo pra redes sociais, e contatos. Todo mundo sai ganhando.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="glass rounded-xl p-8 flex gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <span className="font-mono text-3xl font-bold text-[#0d7377] shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-[#888] leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="relative overflow-hidden rounded-2xl p-12 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,115,119,0.15) 0%, rgba(20,184,189,0.08) 100%)",
              border: "1px solid rgba(13,115,119,0.3)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#0d7377]/20 blur-[100px]" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Bora fazer seu evento{" "}
                <span className="gradient-text">bombar?</span>
              </h2>
              <p className="text-[#888] text-lg mb-8 max-w-lg mx-auto">
                Manda uma mensagem no WhatsApp, me conta sobre o evento e a
                gente combina tudo. Simples assim.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)]"
              >
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src={withPrefix("/images/logo.png")}
              alt="1R1CH"
              width={120}
              height={34}
              className="h-8 w-auto opacity-60"
            />
            <span className="text-[#555] text-sm font-mono">
              Curitiba, PR
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#14b8bd] transition-colors text-sm font-mono"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#14b8bd] transition-colors text-sm font-mono"
            >
              Spotify
            </a>
            <a
              href={SOCIAL_LINKS.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#14b8bd] transition-colors text-sm font-mono"
            >
              SoundCloud
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#14b8bd] transition-colors text-sm font-mono"
            >
              YouTube
            </a>
          </div>

          <a
            href="/"
            className="text-[#555] hover:text-[#14b8bd] transition-colors text-sm font-mono"
          >
            ← Portfolio completo
          </a>
        </div>
      </footer>
    </div>
  );
}
