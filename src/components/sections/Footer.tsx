"use client";

import { SOCIAL_LINKS, SITE } from "@/lib/constants";
import Image from "next/image";
import { withPrefix } from "@/lib/prefix";

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src={withPrefix("/images/logo2.png")}
              alt="1R1CH"
              width={32}
              height={32}
              className="invert w-8 h-8 object-contain"
            />
            <div>
              <p className="font-bold uppercase tracking-[-0.02em]">1R1CH</p>
              <p className="font-mono text-xs text-foreground-dim">
                Tech House &middot; Curitiba, BR
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted hover:text-accent-bright transition-colors"
                data-cursor-hover
              >
                {platform === "appleMusic" ? "Apple Music" : platform}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground-dim">
            &copy; {new Date().getFullYear()} {SITE.name}. Todos os direitos
            reservados.
          </p>
          <p className="font-mono text-xs text-foreground-dim">
            Curitiba, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
