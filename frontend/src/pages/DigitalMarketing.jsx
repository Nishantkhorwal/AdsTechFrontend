import ServiceLayout from "../layouts/ServiceLayout";

export default function DigitalMarketing() {
  return (
    <ServiceLayout
      title="Digital Marketing"
      subtitle="Data-driven strategies that turn traffic into measurable growth."
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    >
      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt=""
          className="rounded-xl shadow-2xl"
        />
        <div>
          <h2 className="text-4xl font-bold mb-6 text-orange-500">
            Performance Focused Marketing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We create powerful digital campaigns across SEO, paid media,
            and social platforms to maximize ROI and build long-term brand authority.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <h2 className="text-4xl font-bold mb-12 text-center">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["SEO Optimization", "Paid Advertising", "Social Media Strategy"].map((item) => (
            <div
              key={item}
              className="p-8 bg-zinc-900 rounded-xl border border-orange-900/30 hover:border-orange-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-400">{item}</h3>
              <p className="text-gray-400 text-sm">
                Strategic execution designed to increase conversions and scale performance.
              </p>
            </div>
          ))}
        </div>
      </section>
    </ServiceLayout>
  );
}
