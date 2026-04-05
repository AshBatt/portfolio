import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Instagram } from "@/components/Instagram";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CatCursor } from "@/components/CatCursor";
import { KonamiCode } from "@/components/KonamiCode";
import { ScrollButton } from "@/components/ScrollButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Instagram />
      <Contact />
      <Footer />
      <CatCursor />
      <KonamiCode />
      <ScrollButton />
    </main>
  );
}
