export function Stats() {
  const stats = [
    {
      number: "500,000+",
      label: "Hectares of Plantations",
      description: "Under plantation and smallholder management"
    },
    {
      number: "50+",
      label: "Years of Heritage",
      description: "In agribusiness excellence"
    },
    {
      number: "100,000+",
      label: "Employees Worldwide",
      description: "Dedicated workforce"
    },
    {
      number: "Dozens",
      label: "Processing Facilities",
      description: "Across the value chain"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-green-100">
            Leading the industry with scale and expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2">{stat.number}</div>
              <div className="text-xl mb-1">{stat.label}</div>
              <div className="text-green-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}