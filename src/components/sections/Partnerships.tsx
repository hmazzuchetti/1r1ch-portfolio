"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PARTNERSHIPS } from "@/lib/constants";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-bold gradient-text">{value}</p>
      <p className="font-mono text-xs text-foreground-dim uppercase tracking-widest mt-2">
        {label}
      </p>
    </div>
  );
}

function ArtistCard({
  name,
  role,
  monthlyListeners,
  spotifyUrl,
}: {
  name: string;
  role: string;
  monthlyListeners: string;
  spotifyUrl: string;
}) {
  return (
    <a
      href={spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="glass p-6 flex flex-col gap-3 group hover:border-accent/40 transition-all duration-300 relative overflow-hidden"
      data-cursor-hover
    >
      {/* corner accent */}
      <div className="absolute top-0 left-0 w-6 h-px bg-accent opacity-60 group-hover:w-12 transition-all duration-500" />
      <div className="absolute top-0 left-0 w-px h-6 bg-accent opacity-60 group-hover:h-12 transition-all duration-500" />

      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
        {role}
      </p>
      <p className="text-xl font-bold uppercase tracking-[-0.02em]">{name}</p>
      <p className="font-mono text-sm text-foreground-muted">
        {monthlyListeners}{" "}
        <span className="text-foreground-dim">ouvintes mensais no Spotify</span>
      </p>
      <p className="font-mono text-xs text-foreground-dim uppercase tracking-widest mt-auto">
        Ver no Spotify →
      </p>
    </a>
  );
}

export function Partnerships() {
  const firstCase = PARTNERSHIPS[0];

  return (
    <section
      id="parcerias"
      className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6"
    >
      <div className="section-divider max-w-7xl mx-auto mb-16 md:mb-32" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
            Parcerias
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-4">
            Colaborações que{" "}
            <span className="gradient-text">movem multidões</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-mono text-sm text-foreground-muted max-w-lg mb-12 md:mb-20">
            Cada parceria é uma extensão de alcance — artistas que juntos
            chegam onde um só não chegaria.
          </p>
        </ScrollReveal>

        {/* Stat destaque */}
        <ScrollReveal delay={0.2}>
          <div className="glass p-8 md:p-12 mb-12 flex flex-wrap gap-10 justify-center md:justify-start">
            <StatCard value="+4.5M" label="ouvintes mensais das parceiras" />
            <StatCard value="1" label="lançamento colaborativo" />
            <StatCard value="3" label="artistas no projeto" />
          </div>
        </ScrollReveal>

        {/* Case: TBT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Spotify embed */}
          <ScrollReveal delay={0.25} direction="left">
            <div className="glass p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright mb-1">
                    Case de Sucesso
                  </p>
                  <h3 className="text-2xl font-bold uppercase tracking-[-0.02em]">
                    {firstCase.trackName}
                  </h3>
                  <p className="font-mono text-xs text-foreground-dim mt-1">
                    Lançado em {firstCase.releaseDate}
                  </p>
                </div>
                <span className="font-mono text-xs px-2 py-1 border border-border text-foreground-dim uppercase tracking-widest shrink-0">
                  Single
                </span>
              </div>

              <iframe
                src={`https://open.spotify.com/embed/track/${firstCase.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
                title={`${firstCase.trackName} - Spotify`}
              />
            </div>
          </ScrollReveal>

          {/* Artist cards */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="flex flex-col gap-4">
              {firstCase.collaborators.map((artist) => (
                <ArtistCard
                  key={artist.name}
                  name={artist.name}
                  role={artist.role}
                  monthlyListeners={artist.monthlyListeners}
                  spotifyUrl={artist.spotifyUrl}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
