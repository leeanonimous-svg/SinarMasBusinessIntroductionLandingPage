import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Sustainability", href: "#sustainability" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className={`text-2xl transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
          Sinarmas Agri
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-300"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={isScrolled ? "bg-green-600 hover:bg-green-700" : "bg-white/10 hover:bg-white/20 text-white border-white"}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-green-600 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-green-600 hover:bg-green-700">Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
