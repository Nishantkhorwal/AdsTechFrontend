import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import ContactFormModal from "../components/ContactForm";

export default function ServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  features = [],
  detailedSections = [],
  benefits = [],
  process = [],
  stats = [],
  industries = [],
  caseStudy,
  faqs = []
}) {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <Navbar onGetStarted={() => setContactOpen(true)} />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <p className="text-orange-500 font-bold tracking-widest text-sm">
              SERVICE
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              {title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          {heroImage && (
            <div className="relative group">
              <div className="absolute inset-0 bg-orange-600/20 blur-2xl rounded-xl opacity-30 group-hover:opacity-50 transition"></div>
              <img
                src={heroImage}
                alt={heroImageAlt || title}
                loading="lazy"
                className="relative z-10 w-full h-[400px] object-cover rounded-xl border border-orange-900/30 shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-20 px-4 border-t border-orange-900/30">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Overview</h2>
          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}
      {features.length > 0 && (
        <section className="py-24 px-4 bg-gradient-to-b from-black to-zinc-900">
          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-4">
                Our Core Services
              </h2>
              <p className="text-gray-400">
                Explore our specialized solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-orange-900/30 rounded-xl 
                  bg-gradient-to-b from-zinc-900 to-black 
                  hover:-translate-y-3 hover:shadow-xl 
                  hover:shadow-orange-600/20 
                  transition-all duration-500"
                >
                  <div className="text-4xl font-black text-orange-600/40 mb-4">
                    {`0${idx + 1}`}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {item.link && (
                    <Link
                      to={item.link}
                      className="text-orange-500 font-bold hover:underline"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= DETAILED SECTIONS ================= */}
      {detailedSections.length > 0 && (
        <section className="py-24 px-4 border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto space-y-28">

            {detailedSections.map((section, idx) => {
              const isReverse = idx % 2 !== 0;

              return (
                <div
                  key={idx}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    isReverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* IMAGE */}
                  {section.image && (
                    <div className={`relative group ${isReverse ? "md:order-2" : ""}`}>
                      <div className="absolute inset-0 bg-orange-600/10 blur-2xl rounded-xl opacity-30"></div>
                      <img
                        src={section.image}
                        alt={section.imageAlt || section.title}
                        loading="lazy"
                        className="relative z-10 w-full h-[400px] object-cover rounded-xl border border-orange-900/30 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className={isReverse ? "md:order-1" : ""}>
                    <h2 className="text-4xl font-bold mb-6">
                      {section.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
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

      {/* ================= STATS ================= */}
      {stats.length > 0 && (
        <section className="py-24 px-4 bg-zinc-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 to-black"></div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="hover:scale-105 transition">
                <h3 className="text-5xl font-black text-orange-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= CASE STUDY ================= */}
      {caseStudy && (
        <section className="py-24 px-4 border-t border-orange-900/30">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {caseStudy.image && (
              <img
                src={caseStudy.image}
                alt={caseStudy.imageAlt || caseStudy.title}
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-xl border border-orange-900/30"
              />
            )}

            <div className="space-y-6">
              <h2 className="text-5xl font-black">
                Case Highlight
              </h2>

              <p className="text-orange-500 font-bold text-lg">
                {caseStudy.title}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {caseStudy.desc}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      {faqs.length > 0 && (
        <section className="py-24 px-4 bg-zinc-900 border-t border-orange-900/30">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl font-black text-center mb-12">
              Frequently Asked Questions
            </h2>

            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-orange-900/30 pb-6">
                <h3 className="text-xl font-bold mb-3">
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
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-950/30 to-black border border-orange-900/50 p-12 rounded-xl text-center">
          <h2 className="text-4xl font-black mb-6">
            Ready To Scale Your Brand?
          </h2>

          <p className="text-gray-400 mb-8">
            Let’s build measurable growth together.
          </p>

          <Link
            onClick={() => setContactOpen(true)}
            className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition"
          >
            Start Your Project
          </Link>
        </div>
      </section>
     <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <Footer />
    </div>
  );
}
