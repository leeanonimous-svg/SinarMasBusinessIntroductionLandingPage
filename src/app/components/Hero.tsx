import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "figma:asset/b8147690aad4ec291ab05a78c0b35e5958515e4d.png";

export function Hero() {
  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="SMART Agribusiness and Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6">Sinar Mas Agribusiness and Food</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Leading Integrated Palm-Based Agribusiness Since 1938
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
          Part of Sinar Mas Group, operating through Golden Agri-Resources (GAR) and PT SMART. 
          From plantations to downstream food and industrial products — delivering excellence across the value chain.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={scrollToContent}>
            Learn More
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
            Contact Us
          </Button>
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}