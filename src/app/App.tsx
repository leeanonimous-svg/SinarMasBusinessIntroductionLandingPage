import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Stats } from "@/app/components/Stats";
import { Products } from "@/app/components/Products";
import { Services } from "@/app/components/Services";
import { Sustainability } from "@/app/components/Sustainability";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Stats />
      <Products />
      <Services />
      <Sustainability />
      <Footer />
    </div>
  );
}
