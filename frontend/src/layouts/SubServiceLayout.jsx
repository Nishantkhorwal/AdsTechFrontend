import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function SubServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  problems = [],
  solutions = [],
  deliverables = [],
  results = [],
  process = [],
  faqs = [],
  parentService,
  parentLink
}) {
  return (
    <div className="w-full bg-[#0b0f17] text-white overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-32 px-6 bg-gradient-to-b from-black to-[#0b0f17]">
        {heroImage && (
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt={heroImageAlt || title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <p className="text-orange-500 font-bold tracking-widest text-sm">
            {parentService}
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            {title}
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {parentLink && (
            <Link
              to={parentLink}
              className="inline-block mt-6 text-orange-500 font-bold hover:underline"
            >
              ← Back to {parentService}
            </Link>
          )}
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24 px-6 border-t border-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 leading-relaxed text-lg">
            {description}
          </p>
        </div>
      </section>

      {/* ================= PROBLEMS ================= */}
      {problems.length > 0 && (
        <section className="py-24 px-6 bg-black border-t border-orange-900/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold text-center mb-16">
              Challenges We Solve
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {problems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#111827] rounded-xl overflow-hidden border border-orange-900/30 hover:scale-105 transition duration-500"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SOLUTIONS ================= */}
      {solutions.length > 0 && (
        <section className="py-24 px-6 border-t border-orange-900/20">
          <div className="max-w-7xl mx-auto space-y-32">
            {solutions.map((section, idx) => {
              const reverse = idx % 2 !== 0;

              return (
                <div key={idx} className="grid md:grid-cols-2 gap-16 items-center">
                  {section.image && (
                    <div className={reverse ? "md:order-2" : ""}>
                      <img
                        src={section.image}
                        alt={section.alt || section.title}
                        className="w-full h-[400px] object-cover rounded-xl border border-orange-900/30 shadow-lg"
                      />
                    </div>
                  )}

                  <div className={reverse ? "md:order-1" : ""}>
                    <h2 className="text-4xl font-extrabold mb-6">
                      {section.title}
                    </h2>

                    <p className="text-gray-400 mb-8">
                      {section.description}
                    </p>

                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray-400">
                          <span className="text-orange-500">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ================= DELIVERABLES ================= */}
      {deliverables.length > 0 && (
        <section className="py-24 px-6 bg-black border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-16">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#111827] p-8 rounded-xl border border-orange-900/30 hover:scale-105 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= RESULTS ================= */}
      {results.length > 0 && (
        <section className="py-24 px-6 bg-gradient-to-r from-black to-[#111827] border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 text-center">
            {results.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-5xl font-extrabold text-orange-500 mb-3">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= PROCESS ================= */}
      {process.length > 0 && (
        <section className="py-24 px-6 border-t border-orange-900/20">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-5xl font-extrabold">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {process.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <section className="py-24 px-6 bg-black border-t border-orange-900/20">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-extrabold text-center mb-16">
              Frequently Asked Questions
            </h2>

            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#111827] p-8 rounded-xl border border-orange-900/30"
              >
                <h3 className="text-xl font-bold mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-black to-[#0b0f17] border-t border-orange-900/20">
        <div className="max-w-4xl mx-auto bg-[#111827] border border-orange-900/40 p-16 rounded-xl text-center shadow-xl">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Scale?
          </h2>
          <p className="text-gray-400 mb-10">
            Let’s create a strategy built for measurable growth.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold rounded-lg transition"
          >
            Request Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
