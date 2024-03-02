import FeaturedPokemons from "@/components/FeaturedPokemons";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
      
      <HeroSection/>
      <BackgroundBeams/>
      <FeaturedPokemons/>
      <MovingCards/>
    </main>
  );
}
