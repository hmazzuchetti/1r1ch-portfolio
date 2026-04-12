"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TRACKS, SPOTIFY_ARTIST_ID } from "@/lib/constants";

function SpotifyTrackEmbed({ trackId }: { trackId: string }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
      width="100%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-lg"
      title={`Spotify track ${trackId}`}
    />
  );
}

export function Music() {
  return (
    <section id="music" className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6">
      <div className="section-divider max-w-7xl mx-auto mb-16 md:mb-32" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-bright mb-4">
            Musica
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-[-0.03em] leading-[1.1] mb-4">
            Ultimos <span className="gradient-text">lancamentos</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="font-mono text-sm text-foreground-muted max-w-lg mb-8 md:mb-16">
            Ouca as tracks mais recentes direto no Spotify.
          </p>
        </ScrollReveal>

        {/* Spotify artist embed */}
        <ScrollReveal delay={0.2}>
          <div className="glass p-6 mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright mb-4">
              Perfil do Artista
            </p>
            <iframe
              src={`https://open.spotify.com/embed/artist/${SPOTIFY_ARTIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-lg"
              title="1R1CH Spotify"
            />
          </div>
        </ScrollReveal>

        {/* Individual tracks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRACKS.map((track, i) => (
            <ScrollReveal key={track.id} delay={i * 0.05}>
              <SpotifyTrackEmbed trackId={track.spotifyId} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
