import { FEATURES } from "@/lib/constants";
import { ClientShell } from "@/components/ClientShell";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Collectors } from "@/components/sections/Collectors";
import { Music } from "@/components/sections/Music";
import { Videos } from "@/components/sections/Videos";
import { Partnerships } from "@/components/sections/Partnerships";
import { Events } from "@/components/sections/Events";
import { EPK } from "@/components/sections/EPK";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <ClientShell>
      <Navbar />
      <main>
        <Hero />
        {FEATURES.about && <About />}
        <Collectors />
        {FEATURES.music && <Music />}
        {FEATURES.videos && <Videos />}
        {FEATURES.partnerships && <Partnerships />}
        {FEATURES.events && <Events />}
        {FEATURES.epk && <EPK />}
        {FEATURES.contactForm && <Contact />}
      </main>
      <Footer />
    </ClientShell>
  );
}
