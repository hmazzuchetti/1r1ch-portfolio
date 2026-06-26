// ============================================================
// FEATURE FLAGS — liga/desliga seções enquanto não tem conteúdo
// ============================================================
export const FEATURES = {
  events: false,        // Sem eventos por enquanto
  videos: true,         // Sets gravados ao vivo
  epk: false,           // EPK ainda não montado
  newsletter: false,    // Newsletter ainda não configurada
  heroVideo: false,     // Vídeo de background do hero ainda não tem
  spotifyEmbed: true,   // Embed do Spotify na seção Music
  contactForm: true,    // Formulário de booking
  music: true,          // Seção de músicas
  about: true,          // Seção about
  linktree: true,       // Link para Linktree na bio
  partnerships: true,   // Seção de parcerias / cases de sucesso
} as const;

// ============================================================
// SITE
// ============================================================
export const SITE = {
  name: "1R1CH",
  title: "1R1CH | DJ & Producer",
  description:
    "1R1CH — DJ & Produtor de Tech House. De Curitiba para o mundo.",
  url: "https://1r1ch.com",
  locale: "pt-BR",
  keywords: [
    "1R1CH",
    "DJ",
    "produtor",
    "techno",
    "house",
    "tech house",
    "musica eletronica",
    "electronic music",
    "Curitiba",
    "Brasil",
    "DJ Curitiba",
    "tech house producer",
    "tech house DJ",
  ],
} as const;

// ============================================================
// NAVEGAÇÃO — só mostra seções ativas
// ============================================================
export const NAV_LINKS = [
  { label: "Sobre", href: "#about", feature: "about" as const },
  { label: "Música", href: "#music", feature: "music" as const },
  { label: "Vídeos", href: "#videos", feature: "videos" as const },
  { label: "Parcerias", href: "#parcerias", feature: "partnerships" as const },
  { label: "Eventos", href: "#events", feature: "events" as const },
  { label: "EPK", href: "#epk", feature: "epk" as const },
  { label: "Contato", href: "#contact", feature: "contactForm" as const },
  { label: "LinkTree", href: "/linktree", feature: "linktree" as const },
] as const;

// ============================================================
// LINKS SOCIAIS
// ============================================================
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/1.r1ch/",
  tiktok: "https://www.tiktok.com/@1.r1ch",
  spotify:
    "https://open.spotify.com/artist/6K6iCvUQxWnDnar9EQra86?si=wEuah3Q1SBmM3-tiCi2nPQ",
  youtube: "https://www.youtube.com/@1R1CH",
  soundcloud: "https://soundcloud.com/1r1ch",
  appleMusic: "https://music.apple.com/us/artist/1r1ch/1877121491",
} as const;

// ============================================================
// RELEASES / TRACKS — Spotify
// ============================================================
export const TRACKS = [
  {
    id: 1,
    spotifyUrl:
      "https://open.spotify.com/track/6Y46c5BdoQaYUhrZVo0CrA?si=ddff750c23154bd0",
    spotifyId: "6Y46c5BdoQaYUhrZVo0CrA",
  },
  {
    id: 2,
    spotifyUrl:
      "https://open.spotify.com/track/61vH2F3GE3Es6yeOfNF4wk?si=77b8859fce6d4a52",
    spotifyId: "61vH2F3GE3Es6yeOfNF4wk",
  },
  {
    id: 3,
    spotifyUrl:
      "https://open.spotify.com/track/1f7j39B9KS0azd2elsHAxE?si=741b3a5ea2b0470c",
    spotifyId: "1f7j39B9KS0azd2elsHAxE",
  },
  {
    id: 4,
    spotifyUrl:
      "https://open.spotify.com/track/5RtDn3p011go9SNIPrBz3F?si=17634dd829394931",
    spotifyId: "5RtDn3p011go9SNIPrBz3F",
  },
  {
    id: 5,
    spotifyUrl:
      "https://open.spotify.com/track/4uT5fKZdH6idpobXPFpDSX?si=d07659746e8d44d5",
    spotifyId: "4uT5fKZdH6idpobXPFpDSX",
  },
  {
    id: 6,
    spotifyUrl:
      "https://open.spotify.com/track/5qbGlEbazEGj9bz08d6a9k?si=4c0931b7a74c4f4c",
    spotifyId: "5qbGlEbazEGj9bz08d6a9k",
  },
  {
    id: 7,
    spotifyUrl:
      "https://open.spotify.com/track/2PM3Q211d5efC5e4hZj6ig?si=0c52b2391db743a7",
    spotifyId: "2PM3Q211d5efC5e4hZj6ig",
  },
  {
    id: 8,
    spotifyUrl:
      "https://open.spotify.com/track/5iDyfeSVutlemXq99ZBmJH?si=5d739b4a7ecb4180",
    spotifyId: "5iDyfeSVutlemXq99ZBmJH",
  },
] as const;

// Spotify artist embed ID
export const SPOTIFY_ARTIST_ID = "6K6iCvUQxWnDnar9EQra86";

// ============================================================
// SETS — YouTube
// ============================================================
export const SETS = [
  {
    youtubeId: "NADVqe_4G7E",
    title: "Tech House Set",
    venue: "Live na mesa",
  },
] as const;

// ============================================================
// BOOKING
// ============================================================
export const BOOKING_EMAIL = "henrique.mazzu@gmail.com";

// ============================================================
// PARCERIAS / CASES DE SUCESSO
// ============================================================
export const PARTNERSHIPS = [
  {
    trackName: "TBT",
    spotifyId: "56HUfbgCRcdB96IYeqKXDS",
    releaseDate: "8 de maio de 2026",
    collaborators: [
      {
        name: "MC MAYAH",
        role: "MC / Feat",
        monthlyListeners: "+4M",
        spotifyUrl: "https://open.spotify.com/artist/10mKIVPFtg42JIvttHQrzr",
      },
      {
        name: "BK2P",
        role: "Produtora",
        monthlyListeners: "+600K",
        spotifyUrl: "https://open.spotify.com/artist/47gch4yYiV3nWaETQKghkC",
      },
    ],
  },
] as const;
