"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LINKS = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/6K6iCvUQxWnDnar9EQra86",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
    color: "from-[#1DB954] to-[#1ed760]",
  },
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/1r1ch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.049-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.282c.013.06.045.094.09.094.042 0 .078-.034.09-.094l.207-1.282-.207-1.332c-.012-.057-.048-.094-.076-.094zm1.83-1.229c-.063 0-.109.05-.117.109l-.21 2.563.21 2.458c.008.063.054.109.117.109.063 0 .109-.046.117-.109l.241-2.458-.241-2.563c-.008-.059-.054-.109-.117-.109zm.945-.089c-.074 0-.128.057-.137.128L2.7 14.496l.214 2.397c.009.074.063.128.137.128.076 0 .128-.054.14-.128l.245-2.397-.245-2.761c-.012-.071-.064-.128-.14-.128zm.968-.24c-.083 0-.143.063-.152.145l-.2 2.856.2 2.311c.009.08.069.143.152.143.08 0 .14-.063.15-.143l.227-2.311-.227-2.856c-.01-.082-.07-.145-.15-.145zm1.005-.182c-.09 0-.158.071-.168.162l-.185 2.898.185 2.248c.01.088.078.159.168.159.088 0 .156-.071.166-.159l.21-2.248-.21-2.898c-.01-.091-.078-.162-.166-.162zm1.063-.109c-.098 0-.174.078-.184.178l-.17 2.869.17 2.182c.01.097.086.175.184.175.096 0 .172-.078.182-.175l.195-2.182-.195-2.869c-.01-.1-.086-.178-.182-.178zm1.12.079c-.107 0-.19.086-.2.194l-.154 2.629.154 2.119c.01.104.093.19.2.19.104 0 .188-.086.198-.19l.176-2.119-.176-2.629c-.01-.108-.094-.194-.198-.194zm1.12-.539c-.117 0-.208.094-.218.211l-.14 3.073.14 2.064c.01.113.101.207.218.207.113 0 .205-.094.215-.207l.16-2.064-.16-3.073c-.01-.117-.102-.211-.215-.211zm1.114-.255c-.122 0-.221.1-.231.226l-.126 3.236.126 2.01c.01.12.109.22.231.22.12 0 .219-.1.229-.22l.143-2.01-.143-3.236c-.01-.126-.109-.226-.229-.226zm1.127-.186c-.133 0-.238.108-.247.243l-.112 3.35.112 1.952c.009.128.114.238.247.238.128 0 .235-.11.245-.238l.128-1.952-.128-3.35c-.01-.135-.117-.243-.245-.243zm1.159-.108c-.141 0-.252.116-.261.258l-.098 3.404.098 1.896c.009.136.12.254.261.254.137 0 .249-.118.258-.254l.113-1.896-.113-3.404c-.009-.142-.121-.258-.258-.258zm1.174-.069c-.149 0-.268.122-.276.271l-.084 3.413.084 1.841c.008.145.127.267.276.267.145 0 .265-.122.274-.267l.097-1.841-.097-3.413c-.009-.149-.129-.271-.274-.271zm1.212.035c-.157 0-.284.13-.292.288l-.071 3.306.071 1.787c.008.152.135.282.292.282.152 0 .28-.13.289-.282l.082-1.787-.082-3.306c-.009-.158-.137-.288-.289-.288zm5.455 2.065c-.439 0-.86.074-1.254.209-.181-2.065-1.924-3.676-4.054-3.676-.343 0-.68.04-1.009.107-.131.027-.164.055-.164.172v7.453c0 .12.093.222.21.232 0 0 5.132.003 6.271.003 1.218 0 2.205-.987 2.205-2.205 0-1.218-.987-2.295-2.205-2.295z" />
      </svg>
    ),
    color: "from-[#ff5500] to-[#ff7700]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@1R1CH",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "from-[#FF0000] to-[#cc0000]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/1.r1ch/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    color: "from-[#E4405F] to-[#C13584]",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@1.r1ch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    color: "from-[#000000] to-[#25F4EE]",
  },
  {
    label: "Email",
    href: "mailto:hhmazzuchetti@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    color: "from-[#0d7377] to-[#14b8bd]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function LinktreePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 80%, rgba(13,115,119,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(10,147,150,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(20,184,189,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grain overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          mixBlendMode: "overlay" as const,
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-md flex flex-col items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar / Logo */}
        <motion.div variants={itemVariants} className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[rgba(255,255,255,0.08)] relative">
            <Image
              src="/images/artist-photo.jpeg"
              alt="1R1CH"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#0d7377] to-[#14b8bd] opacity-20 blur-md -z-10" />
        </motion.div>

        {/* Name & tagline */}
        <motion.div variants={itemVariants} className="text-center">
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #14b8bd 0%, #0d7377 50%, #0a9396 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            1R1CH
          </h1>
          <p className="text-sm text-[#888888] mt-1 font-mono tracking-wider uppercase">
            DJ & Producer
          </p>
          <p className="text-xs text-[#555555] mt-0.5 font-mono">
            Curitiba, BR
          </p>
        </motion.div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-2">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              {/* Gradient glow on hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300`}
              />
              <span className="relative text-[#888888] group-hover:text-[#f5f5f5] transition-colors duration-300">
                {link.icon}
              </span>
              <span className="relative text-sm font-medium tracking-wide">
                {link.label}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4 ml-auto text-[#555555] group-hover:text-[#888888] transition-all duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Portfolio link */}
        <motion.div variants={itemVariants} className="mt-4">
          <a
            href="/"
            className="text-xs text-[#555555] hover:text-[#0d7377] transition-colors duration-300 font-mono tracking-wider uppercase"
          >
            Full Portfolio &rarr;
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="text-[10px] text-[#333333] font-mono mt-6"
        >
          &copy; {new Date().getFullYear()} 1R1CH
        </motion.p>
      </motion.div>
    </div>
  );
}
