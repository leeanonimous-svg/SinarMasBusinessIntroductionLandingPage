import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-2xl mb-4">Sinarmas Agri</h3>
            <p className="text-gray-400 leading-relaxed">
              Leading Southeast Asia's sustainable agricultural future through innovation, 
              excellence, and commitment to people and planet.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#sustainability" className="hover:text-green-400 transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-green-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-400 transition-colors">Annual Reports</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Sustainability Report</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">News & Media</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 21 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@sinarmasagri.com</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; 2026 Sinarmas Agri Business. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
