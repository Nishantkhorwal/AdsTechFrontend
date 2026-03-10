import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function MegaServiceLayout({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  services = [],
  faqs = [],
  benefits = [],
  stats = [],
  packages = [],
  process = []
}) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-600/5 blur-3xl rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <p className="text-orange-500 font-bold tracking-widest text-sm uppercase">Service</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">{title}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{subtitle}</p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-600/10 font-bold transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {heroImage && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent blur-2xl rounded-xl"></div>
              <img
                src={heroImage}
                alt={heroImageAlt || title}
                className="relative z-10 w-full h-[420px] object-cover rounded-xl border border-orange-900/30 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="py-20 px-4 md:px-8 border-t border-orange-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Overview</h2>
          <p className="text-gray-400 leading-relaxed text-center text-lg whitespace-pre-line">{description}</p>
        </div>
      </section>

      {/* STATS SECTION */}
      {stats.length > 0 && (
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-orange-950/10 to-transparent border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">By The Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 border border-orange-900/30 rounded-lg bg-black/50 hover:bg-orange-950/10 transition duration-300">
                  <div className="text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <p className="text-gray-300 font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS SECTION */}
      {benefits.length > 0 && (
        <section className="py-24 px-4 md:px-8 border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Why Choose This Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-8 bg-gradient-to-br from-orange-950/20 to-black border border-orange-900/30 rounded-lg hover:border-orange-600/50 transition duration-300">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4 border border-orange-600/30">
                    <span className="text-orange-500 text-xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SERVICES CARDS SECTION */}
      <section className="py-24 px-4 md:px-8 border-t border-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-black border border-orange-900/30 rounded-lg overflow-hidden hover:border-orange-600/50 transition duration-300 transform hover:scale-105"
              >
                {service.image && (
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-orange-950/20 to-black">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition duration-300">{service.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>
                  {service.points && (
                    <ul className="space-y-2">
                      {service.points.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-400">
                          <span className="text-orange-500 font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      {process.length > 0 && (
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-orange-950/10 to-transparent border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-orange-600 text-black rounded-full flex items-center justify-center font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-center mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-center text-sm">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-r from-orange-600 to-orange-600/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PACKAGES SECTION */}
      {/* {packages.length > 0 && (
        <section className="py-24 px-4 md:px-8 border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Packages & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-lg border transition duration-300 transform hover:scale-105 ${
                    pkg.featured
                      ? 'bg-gradient-to-br from-orange-950/30 to-black border-orange-600/50 ring-2 ring-orange-600/20'
                      : 'bg-black border-orange-900/30 hover:border-orange-600/50'
                  }`}
                >
                  {pkg.featured && <p className="text-orange-500 font-bold text-sm mb-2 uppercase">Most Popular</p>}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    {pkg.period && <span className="text-gray-400 ml-2">{pkg.period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-300">
                        <span className="text-orange-500">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 font-bold transition ${
                    pkg.featured
                      ? 'bg-orange-600 hover:bg-orange-700 text-black'
                      : 'border border-orange-600 text-orange-600 hover:bg-orange-600/10'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* FAQ SECTION */}
      {faqs.length > 0 && (
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-orange-950/10 to-transparent border-t border-orange-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-orange-900/30 rounded-lg overflow-hidden hover:border-orange-600/50 transition duration-300"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-8 py-5 text-left flex justify-between items-center bg-black hover:bg-orange-950/10 transition"
                  >
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <span className={`text-orange-500 text-2xl transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-8 py-5 border-t border-orange-900/30 bg-orange-950/5">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="py-24 px-4 md:px-8 border-t border-orange-900/30">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-950/30 to-black border border-orange-900/50 p-12 rounded-lg text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Let's work together to create campaigns that deliver real results and build lasting brand connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition duration-300 transform hover:scale-105 rounded-lg"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
