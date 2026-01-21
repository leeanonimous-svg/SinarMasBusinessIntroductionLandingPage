import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import whatWeDoImage from "figma:asset/eb9104504ff3e8f73ed93419d15ff2adaea9e7b2.png";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of agricultural excellence spanning nearly a century
          </p>
        </div>

        {/* History Section */}
        <div className="mb-16 bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:p-12 rounded-lg">
          <h3 className="text-3xl mb-6 text-center">Our History</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-green-600 min-w-[100px]">1938</div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Sinar Mas Group was founded in Indonesia, establishing the foundation for what would 
                    become one of the region's most diversified and influential conglomerates.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-green-600 min-w-[100px]">1992</div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    PT Sinar Mas Agro Resources and Technology Tbk (SMART), the Indonesian operating 
                    company, was listed on Indonesia's stock exchange, marking a significant milestone 
                    in the company's growth and transparency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl font-bold text-green-600 min-w-[100px]">1999</div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Golden Agri-Resources Ltd. (GAR) was listed on the Singapore Exchange, expanding 
                    the company's international presence and access to global capital markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src={whatWeDoImage}
              alt="Agricultural workers in plantation"
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl mb-6">What We Do</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sinar Mas Agribusiness and Food operates across the full palm oil value chain, 
              delivering integrated solutions from plantation to consumer products.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg text-green-700 mb-2">Upstream Activities</h4>
                <p className="text-gray-700 leading-relaxed">
                  Managing and cultivating oil palm plantations across hundreds of thousands of hectares 
                  in Indonesia, including partnerships with smallholder and plasma farmers. We harvest 
                  fresh fruit bunches (FFB) from oil palms using sustainable practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-green-700 mb-2">Processing & Production</h4>
                <p className="text-gray-700 leading-relaxed">
                  Converting FFB into crude palm oil (CPO) and palm kernel (PK), then producing 
                  value-added products including cooking oil, margarine, shortening, biodiesel, 
                  oleochemicals, and other industrial fats.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-green-700 mb-2">Distribution & Marketing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Selling both consumer brands and bulk industrial palm products domestically and 
                  internationally through our extensive distribution network.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Group Affiliation */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 md:p-12 rounded-lg mb-16">
          <h3 className="text-3xl mb-6 text-center">Group Affiliation</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 mb-6 leading-relaxed text-center">
              Sinar Mas Agribusiness and Food is part of the prestigious Sinar Mas Group, operating 
              through two major publicly-listed entities:
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-3 text-green-700">Golden Agri-Resources (GAR)</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Listed on the Singapore Exchange since 1999
                </p>
                <p className="text-gray-600 text-sm">
                  Our international business entity providing global market access and operational excellence
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl mb-3 text-green-700">PT SMART</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Listed on Indonesia Stock Exchange since 1992
                </p>
                <p className="text-gray-600 text-sm">
                  Our Indonesian operating company managing local operations and production facilities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facilities */}
        <div className="bg-gray-900 text-white p-8 md:p-12 rounded-lg">
          <h3 className="text-3xl mb-6 text-center">Manufacturing Excellence</h3>
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            SMART owns and operates multiple palm oil mills, refining facilities, biodiesel plants, 
            and oleochemical production facilities across Indonesia. This integrated infrastructure 
            supports our entire production chain, ensuring quality control, efficiency, and 
            sustainability at every stage.
          </p>
        </div>
      </div>
    </section>
  );
}