import { Sprout, TrendingUp, Users, Building2, Truck, HeartHandshake, Leaf, FlaskConical, Fuel } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Sprout className="w-10 h-10" />,
      title: "Integrated Plantation & Smallholder Management",
      description: "Comprehensive plantation management services including partnerships with smallholder farmers to ensure sustainable and efficient cultivation practices."
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Palm Oil Milling & Primary Processing",
      description: "State-of-the-art milling facilities converting fresh fruit bunches into crude palm oil and palm kernel with industry-leading efficiency."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Refining & Downstream Palm-Based Processing",
      description: "Advanced refining processes transforming crude palm oil into high-quality refined products for various consumer and industrial applications."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Food Ingredient & Specialty Fat Solutions",
      description: "Customized specialty fats and food ingredients tailored for bakery, confectionery, and food manufacturing industries worldwide."
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: "Oleochemical & Industrial Material Supply",
      description: "Production and supply of oleochemicals and industrial materials for various sectors including cosmetics, pharmaceuticals, and manufacturing."
    },
    {
      icon: <Fuel className="w-10 h-10" />,
      title: "Biodiesel & Renewable Energy Solutions",
      description: "Sustainable biodiesel production contributing to renewable energy initiatives and reducing carbon footprint in the energy sector."
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      title: "Sustainable Sourcing & Traceability Services",
      description: "Complete traceability systems ensuring sustainable sourcing practices and transparent supply chain management from plantation to end-user."
    },
    {
      icon: <HeartHandshake className="w-10 h-10" />,
      title: "Research, Innovation & Agronomic Support",
      description: "Continuous research and development initiatives providing agronomic expertise and innovative solutions to optimize agricultural practices."
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "End-to-End Supply Chain & Trading Services",
      description: "Integrated supply chain and trading solutions ensuring efficient logistics, timely delivery, and reliable distribution to global markets."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across the entire agricultural value chain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-green-600 mb-4">{service.icon}</div>
              <h3 className="text-xl mb-3">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 p-12 rounded-lg">
          <h3 className="text-3xl mb-4">Integrated Operations</h3>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg">
            Our vertically integrated operations give us complete control over every stage of production. 
            From nursery and planting to harvesting, processing, and distribution, we maintain the highest 
            standards of quality, efficiency, and sustainability throughout our entire value chain.
          </p>
        </div>
      </div>
    </section>
  );
}