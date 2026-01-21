import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Leaf, Shield, TrendingUp, Users, Flame, FileText } from "lucide-react";

export function Sustainability() {
  const initiatives = [
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Responsible Sourcing & Traceability",
      stats: [
        "98% traceability to plantation (TTP) by end-2022",
        "NDPE policies across the palm supply chain",
        "Comprehensive mapping of critical palm suppliers in Indonesia",
        "NDPE and traceability data externally assured by third party",
        "Strengthened readiness for EU Anti-Deforestation Regulation (EUDR)"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Climate Action & Emissions",
      stats: [
        "Signatory to Agriculture Sector Roadmap to 1.5°C (COP27)",
        "Target for all palm oil volumes to reach 'Delivering' status by 2025",
        "Over 90% 'Delivering' status for CPO and PKO achieved",
        "Implementing TCFD recommendations",
        "First-time disclosure of scope 3 and LULUCF emissions",
        "Ongoing strategies to reduce greenhouse gas emissions"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      title: "Transparency & Reporting",
      stats: [
        "Annual sustainability reporting with externally assured indicators",
        "Enhanced transparency on traceability and climate performance",
        "Regular disclosure of sustainability metrics"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-amber-600" />,
      title: "Community & Livelihoods",
      stats: [
        "76 community economic empowerment projects across Indonesia",
        "Support for rural livelihoods through training and income diversification",
        "37 MSMEs established through community programmes",
        "MSME development for sustainable local economies"
      ]
    },
    {
      icon: <Flame className="w-12 h-12 text-red-600" />,
      title: "Environmental Protection & Fire Prevention",
      stats: [
        "Fire prevention programme covering over 100 villages (DMPA)",
        "GeoSMART app deployment detecting fire hotspots 3x faster",
        "Strengthened preparedness for El Niño-related fire and haze risks"
      ]
    },
    {
      icon: <Leaf className="w-12 h-12 text-emerald-600" />,
      title: "NDPE Implementation",
      stats: [
        "No Deforestation, No Peat, No Exploitation policies",
        "Comprehensive supply chain monitoring",
        "Protection of high conservation value forests",
        "Commitment to sustainable palm oil production"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Sustainability Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a sustainable future through responsible agricultural practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl mb-6">Our Environmental Pledge</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sustainability is at the core of everything we do. We recognize that our long-term 
              success depends on our ability to operate responsibly and minimize our environmental 
              footprint while maximizing positive social impact.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our sustainability framework encompasses environmental stewardship, social responsibility, 
              and economic viability. We continuously invest in research and innovation to improve our 
              practices and contribute to global sustainability goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through collaboration with international organizations, government agencies, and local 
              communities, we work towards creating shared value and lasting positive change in the 
              regions where we operate.
            </p>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757525473930-0b82237e55ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZ3JlZW58ZW58MXx8fHwxNzY4NzkyODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sustainable agriculture"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{initiative.icon}</div>
              <h4 className="text-xl mb-4 text-center">{initiative.title}</h4>
              <ul className="text-gray-700 leading-relaxed space-y-2 text-left">
                {initiative.stats.map((stat, statIndex) => (
                  <li key={statIndex} className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-600 text-white p-12 rounded-lg">
          <div className="text-center">
            <h3 className="text-3xl mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div>
                <div className="text-4xl mb-2">98%</div>
                <p className="text-lg">Traceability to Plantation (TTP)</p>
              </div>
              <div>
                <div className="text-4xl mb-2">90%+</div>
                <p className="text-lg">'Delivering' Status for CPO & PKO</p>
              </div>
              <div>
                <div className="text-4xl mb-2">76</div>
                <p className="text-lg">Community Empowerment Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}