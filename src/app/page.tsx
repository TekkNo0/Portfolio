import { TechBackground } from "@/components/ui/TechBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-cyber-bg text-slate-100 overflow-hidden">
      {/* Interactive Tech Particle Canvas */}
      <TechBackground />

      {/* Hero Section based on Wireframe */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Contact Section & Direct Socials */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
