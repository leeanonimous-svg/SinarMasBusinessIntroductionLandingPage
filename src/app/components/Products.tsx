import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Package } from "lucide-react";
import cookingOilImage from "figma:asset/5f49e53362a85179e40d140ea2f49bab73607cf3.png";
import margarineImage from "figma:asset/9798c47d0d30e229973c7e6ab0fe283768c6b589.png";
import shorteningImage from "figma:asset/dfe0637c69ef3f5bc1457bbe4636c8a23ad74e94.png";
import specialtyFatsImage from "figma:asset/821532cb78a7e1d3505e918248283d813bcafc57.png";

export function Products() {
  const products = [
    {
      title: "Cooking Oil",
      description: "High-quality refined cooking oil for households and food service industries. Our cooking oil products meet the highest standards of purity and taste, perfect for everyday cooking needs.",
      image: cookingOilImage
    },
    {
      title: "Margarine",
      description: "Premium margarine products for baking, cooking, and spreading. Our margarine range offers excellent taste, texture, and functionality for both consumer and industrial applications.",
      image: margarineImage
    },
    {
      title: "Shortening",
      description: "Professional-grade shortening for bakery and confectionery industries. Delivers consistent performance, excellent texture, and superior results in baked goods and pastries.",
      image: shorteningImage
    },
    {
      title: "Specialty Fats",
      description: "Customized specialty fats for various industrial applications including confectionery, bakery, and food manufacturing. Tailored solutions to meet specific product requirements.",
      image: specialtyFatsImage
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality palm-based products for consumers and industries worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Package className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl mb-3">{product.title}</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-100 p-8 rounded-lg">
          <h3 className="text-2xl mb-4 text-center">Product Quality & Standards</h3>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            All our products meet international quality standards and certifications. We maintain 
            rigorous quality control throughout our production process, from plantation to final 
            product delivery, ensuring consistency and excellence in every batch.
          </p>
        </div>
      </div>
    </section>
  );
}