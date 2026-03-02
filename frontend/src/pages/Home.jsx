import { useEffect, useState } from 'react';
import "../App.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  
const portfolioItems = [
    {
      title: 'Brand Campaign',
      category: 'Digital',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0'
    },
    {
      title: 'Outdoor Activation',
      category: 'Print & Outdoor',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    },
    {
      title: 'Event Marketing',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'
    },
    {
      title: 'Social Strategy',
      category: 'Digital',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'
    }
  ];
  

  

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Amplify Your
                <br />
                <span className="text-orange-500">Brand</span>
                <br />
                Impact
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Transform your vision into powerful marketing campaigns that captivate, engage, and convert. We're your creative partner for every channel.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50">
                  Start Project
                </button>
                <button className="px-8 py-4 border-2 border-orange-600 hover:bg-orange-600/10 font-bold transition-all">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 md:h-full min-h-96">
  
  {/* Image */}
  <div
    className="absolute inset-0 bg-cover bg-center rounded-lg overflow-hidden transition-transform duration-700 hover:scale-105"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1533750349088-cd871a92f312')`
    }}
  ></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

  {/* Orange Gradient Accent */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-black rounded-lg border-2 border-orange-900/30"></div>

</div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">OUR SERVICES</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Complete Marketing Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From concept to execution, we handle every aspect of your marketing strategy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
  {[
    {
      title: 'Digital Marketing',
      description: 'SEO, SEM, Social Media & Content strategies that drive measurable results and sustainable growth.',
      icon: '01'
    },
    {
      title: 'Outdoor & Print',
      description: 'Strategic outdoor advertising and print campaigns that create lasting impressions in the physical world.',
      icon: '02'
    },
    {
      title: 'Events & Retail',
      description: 'Experiential marketing events and retail activations that bring your brand to life.',
      icon: '03'
    }
  ].map((service, idx) => (
    <div
      key={idx}
      className="relative p-8 rounded-xl border border-orange-900/30 
      bg-gradient-to-b from-zinc-900 to-black 
      transition-all duration-500 
      hover:-translate-y-3 
      hover:shadow-2xl hover:shadow-orange-600/20 
      hover:border-orange-500/50 
      group overflow-hidden"
    >

      {/* Animated Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
        <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent rotate-12 transform translate-x-0 group-hover:translate-x-[250%] transition-transform duration-1000"></div>
      </div>

      {/* Icon Number */}
      <div className="text-5xl font-black text-orange-600/30 
        group-hover:text-orange-500/70 
        transition-all duration-500 mb-6">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
        {service.description}
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center text-orange-500 font-bold cursor-pointer gap-2">
        <span className="group-hover:tracking-wider transition-all duration-300">
          Explore
        </span>
        <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
          →
        </span>
      </div>

    </div>
  ))}
</div>

        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">HOW WE WORK</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our Proven Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-600/0 via-orange-600/50 to-orange-600/0 z-0"></div>

            {[
              { step: '01', title: 'Strategy', desc: 'Deep analysis and planning' },
              { step: '02', title: 'Creative', desc: 'Bold concepts & design' },
              { step: '03', title: 'Execution', desc: 'Flawless implementation' },
              { step: '04', title: 'Optimize', desc: 'Continuous improvement' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center text-2xl font-black transition-all mb-6 cursor-pointer hover:scale-110 shadow-lg shadow-orange-600/50">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-center text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">LATEST WORK</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="h-64 rounded-lg overflow-hidden cursor-pointer group relative hover:shadow-2xl hover:shadow-orange-600/50 transition-all"
              >

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>

                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-orange-400 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50">
              View All Projects
            </button>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border border-orange-900/50 bg-gradient-to-br from-orange-950/20 to-black p-12 rounded-lg">
            <div className="text-center mb-12">
              <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">GET IN TOUCH</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Transform Your Brand?
              </h2>
              <p className="text-gray-400 text-lg">
                Let's collaborate and create something extraordinary together
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
                />
              </div>
              <input 
                type="text" 
                placeholder="Project Title" 
                className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows="5"
                className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white resize-none"
              />
              <div className="flex justify-center pt-4">
                <button 
                  type="submit"
                  className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50"
                >
                  Send Message
                </button>
              </div>
            </form>

            <div className="mt-12 pt-12 border-t border-orange-900/30 grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-orange-500 font-bold text-sm mb-2">PHONE</p>
                <p className="text-white">+91 9718 44 77 88</p>
                <p className="text-gray-400">+91 9716 44 77 88</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-sm mb-2">EMAIL</p>
                <p className="text-white">info@adstechindia.uk</p>
              </div>
              <div>
                <p className="text-orange-500 font-bold text-sm mb-2">LOCATION</p>
                <p className="text-gray-400 text-sm">Unit-101, 1st Floor, Vipul Business Park<br/>Sohna Road, Sector-48, Gurgram</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}