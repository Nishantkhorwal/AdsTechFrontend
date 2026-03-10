'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const services = [
    {
      id: 1,
      title: 'Outdoor Advertising (OOH Media)',
      description: 'Pan India outdoor media planning, buying, and execution for maximum brand visibility',
      mediums: ['Hoardings', 'Unipoles', 'Digital Displays', 'Transit Media'],
      icon: '📍'
    },
    {
      id: 2,
      title: 'Retail & Fabrication',
      description: 'Complete retail branding and fabrication solutions for showrooms and retail spaces',
      mediums: ['LED Signage', 'Fabrication', 'Sunboards', 'Flex Printing'],
      icon: '🏪'
    },
    {
      id: 3,
      title: 'Events & Activation',
      description: 'End-to-end event management and market activation for brand engagement',
      mediums: ['Exhibitions', 'Market Activation', 'Rural Activation', 'Look Walkers'],
      icon: '🎪'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Tata Unipole',
      category: 'Outdoor Advertising',
      description: 'Multi-city outdoor advertising campaign across Delhi NCR',
      image: 'portfolio/Unipole1.png?w=800&h=400&fit=crop',
      location: 'Delhi NCR'
    },
    {
      id: 2,
      title: 'Honda Unipole',
      category: 'Outdoor Advertising',
      description: 'Multi-city outdoor advertising campaign across Delhi NCR',
      image: 'portfolio/Unipole3.png?w=800&h=400&fit=crop',
      location: 'Delhi NCR'
    },
    {
      id: 3,
      title: 'Metro Branding Initiative',
      category: 'Outdoor Advertising',
      description: 'Large-scale metro station and train branding project',
      image: 'portfolio/MetroAd.png?w=800&h=400&fit=crop',
      location: 'Delhi Metro'
    },
    {
      id: 4,
      title: 'Exhibition & Setup',
      category: 'Events & Activation',
      description: 'Large-scale brand activation and experiential marketing event',
      image: 'portfolio/Event1.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 5,
      title: 'Brand Activation Event',
      category: 'Events & Activation',
      description: 'Large-scale brand activation and experiential marketing event',
      image: 'portfolio/Event2.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 6,
      title: 'Vivo LED Gate',
      category: 'Outdoor Advertising',
      description: 'High-impact digital LED screen advertising across premium locations',
      image: 'portfolio/GateAd.png?w=800&h=400&fit=crop',
      location: 'Delhi NCR'
    },
    {
      id: 7,
      title: 'Paras Hospital Campaign',
      category: 'Outdoor Advertising',
      description: 'Pole Advertising of Paras Hospital',
      image: 'portfolio/Paras1.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 8,
      title: 'Paras Hospital Campaign',
      category: 'Outdoor Advertising',
      description: 'Hoarding Advertising of Paras Hospital',
      image: 'portfolio/Paras2.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 9,
      title: 'Paras Hospital Campaign',
      category: 'Outdoor Advertising',
      description: 'Unipole Advertising of Paras Hospital',
      image: 'portfolio/Paras3.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 10,
      title: 'Paras Hospital Campaign',
      category: 'Outdoor Advertising',
      description: 'LED Advertising of Paras Hospital',
      image: 'portfolio/Paras4.png?w=800&h=400&fit=crop',
      location: 'Gurgaon'
    },
    {
      id: 11,
      title: 'Bus Advertisement Campaign',
      category: 'Outdoor Advertising',
      description: 'Premium Advertisement on Bus',
      image: 'portfolio/BusAd.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },
    {
      id: 12,
      title: 'Auto Advertisement Campaign',
      category: 'Outdoor Advertising',
      description: 'Premium Advertisement on Auto',
      image: 'portfolio/AutoAd.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },
    {
      id: 13,
      title: 'Fanta Metro Advertisement Campaign',
      category: 'Outdoor Advertising',
      description: 'Premium Advertisement on Metro',
      image: 'portfolio/MetroAd.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },
    {
      id: 14,
      title: 'Big Baazar Truck Advertisement Campaign',
      category: 'Outdoor Advertising',
      description: 'Premium Advertisement on Truck',
      image: 'portfolio/TruckAd.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },
    {
      id: 15,
      title: 'Y Suites Advertisement Campaign',
      category: 'Retail',
      description: 'Premium Fencing Near Construction Site',
      image: 'portfolio/CHD2.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },
    {
      id: 16,
      title: 'Y Suites Advertisement Campaign',
      category: 'Retail',
      description: 'Premium Gate Near Construction Site',
      image: 'portfolio/CHD1.png?w=800&h=400&fit=crop',
      location: 'Gurgaon/Delhi'
    },

  ];

  const clients = [
  { id: 1, name: 'M3M India', category: 'Real Estate' },
  { id: 2, name: 'GD Goenka University', category: 'Education' },
  { id: 3, name: 'OLA', category: 'Mobility' },
  { id: 4, name: 'Gaadi by CarDekho', category: 'Automobile' },
  { id: 5, name: 'Suncity Projects', category: 'Real Estate' },
  { id: 6, name: 'K.R. Mangalam University', category: 'Education' },
  { id: 7, name: 'Fabindia', category: 'Retail' },
  { id: 8, name: 'Whiteland Corporation', category: 'Real Estate' },
  { id: 9, name: 'Pratiksha Hospital', category: 'Healthcare' },
  { id: 10, name: 'Silverglades', category: 'Real Estate' },
  { id: 11, name: 'Adani Realty', category: 'Real Estate' },
  { id: 12, name: 'Risland Sky Mansion', category: 'Real Estate' },
  { id: 13, name: 'ROF Pravasa', category: 'Real Estate' },
  { id: 14, name: 'Paras Hospitals', category: 'Healthcare' },
  { id: 15, name: 'Lancers International School', category: 'Education' },
  { id: 16, name: 'Reach Group', category: 'Corporate' },
  { id: 17, name: 'Gaurs Group', category: 'Real Estate' },
  { id: 18, name: 'Amity University', category: 'Education' },
  { id: 19, name: 'Geetanjali Homestate Pvt Ltd', category: 'Real Estate' },
  { id: 20, name: 'Columbia Asia Hospital', category: 'Healthcare' },
  { id: 21, name: 'SelaQui International School', category: 'Education' },
  { id: 22, name: 'Delhi Public School Pvt Ltd', category: 'Education' },
  { id: 23, name: 'HDFC Bank', category: 'Banking/Finance' },
  { id: 24, name: 'Aakash Medical IIT-JEE Foundations', category: 'Education' },
  { id: 25, name: 'Vodafone', category: 'Telecommunications' },
  { id: 26, name: 'Airtel', category: 'Telecommunications' },
  { id: 27, name: 'Pepsi', category: 'Food & Beverage' },
  { id: 28, name: 'Jio', category: 'Telecommunications' },
  { id: 29, name: 'Bestech', category: 'Real Estate' },
  { id: 30, name: 'Unacademy', category: 'Education' },
  { id: 31, name: 'Paras Builders', category: 'Real Estate' },
  { id: 32, name: 'Indriya', category: 'Real Estate' },
  { id: 33, name: 'Aditya Birla Jewellery', category: 'Retail/Jewellery' }
];


  const achievements = [
    { number: '20+', label: 'Years of Experience' },
    { number: '15+', label: 'Professional Team Members' },
    { number: '500+', label: 'Projects Delivered' },
    { number: 'Pan India', label: 'Market Presence' }
  ];

  const whyChooseUs = [
    {
      title: 'Transparency & Integrity',
      description: 'Complete transparency in planning, execution, and reporting for every project'
    },
    {
      title: 'Quality & Excellence',
      description: 'Commitment to industry-leading quality standards in every deliverable'
    },
    {
      title: 'Timely Delivery',
      description: 'Consistent on-time delivery with professional project management'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Building lasting relationships beyond single projects'
    },
    {
      title: 'In-House Capabilities',
      description: 'Own fabrication, printing, and design studios for better control'
    },
    {
      title: 'Pan India Network',
      description: 'Extensive network with offices and representatives across India'
    }
  ];

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">OUR PORTFOLIO</p>
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-balance">
                Transforming
                <br />
                Brands Into
                <br />
                <span className="text-orange-500">Market Icons</span>
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              From concept to execution, we deliver comprehensive marketing and outdoor advertising solutions that elevate brands across India. 20+ years of excellence in OOH Media, Retail Fabrication, and Event Management.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">COMPREHENSIVE SOLUTIONS</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              What We Offer
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete end-to-end marketing and advertising solutions designed to maximize your brand impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative p-8 rounded-xl border border-orange-900/30 bg-gradient-to-b from-zinc-900 to-black transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-600/20 hover:border-orange-500/50 group"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="text-orange-500 font-bold text-sm">Services Include:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {service.mediums.map((medium, idx) => (
                      <li key={idx}>✓ {medium}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">FEATURED PROJECTS</p>
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Our Latest Work
            </h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeFilter === 'all'
                    ? 'bg-orange-600 text-black'
                    : 'border border-orange-600/50 text-orange-500 hover:border-orange-500'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('outdoor')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeFilter === 'outdoor'
                    ? 'bg-orange-600 text-black'
                    : 'border border-orange-600/50 text-orange-500 hover:border-orange-500'
                }`}
              >
                Outdoor
              </button>
              <button
                onClick={() => setActiveFilter('retail')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeFilter === 'retail'
                    ? 'bg-orange-600 text-black'
                    : 'border border-orange-600/50 text-orange-500 hover:border-orange-500'
                }`}
              >
                Retail
              </button>
              <button
                onClick={() => setActiveFilter('events')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeFilter === 'events'
                    ? 'bg-orange-600 text-black'
                    : 'border border-orange-600/50 text-orange-500 hover:border-orange-500'
                }`}
              >
                Events
              </button>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer rounded-lg overflow-hidden relative h-80 hover:shadow-2xl hover:shadow-orange-600/30 transition-all"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="transform group-hover:translate-y-0 transition-transform">
                    <p className="text-orange-400 text-sm font-bold mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    <p className="text-gray-400 text-xs">📍 {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black via-orange-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-5xl md:text-6xl font-black text-orange-500 mb-2">
                  {item.number}
                </p>
                <p className="text-gray-400 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-orange-950/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">WHY PARTNER WITH US</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((value, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-orange-900/30 hover:border-orange-500/50 transition-all group">
                <div className="inline-block p-3 bg-orange-500/10 rounded-lg mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <p className="text-3xl font-black text-orange-500">{"0" + (idx + 1)}</p>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Our Clients Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-orange-950/5 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">TRUSTED BY</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Brands We've Worked With
            </h2>
            <p className="text-gray-400 text-lg">
              Partnering with India's leading companies across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="p-8 rounded-lg border border-orange-900/30 bg-gradient-to-br from-zinc-900 to-black hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-600/10 transition-all group text-center"
              >
                <p className="text-orange-500 font-bold text-sm mb-3 group-hover:text-orange-400 transition-colors">
                  {client.category}
                </p>
                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
                  {client.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">HOW WE WORK</p>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our Proven Methodology
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-orange-600/0 via-orange-600/50 to-orange-600/0 z-0"></div>

            {[
              { step: '01', title: 'Briefing', desc: 'Understand your vision, goals & requirements' },
              { step: '02', title: 'Planning', desc: 'Strategic planning & detailed proposal' },
              { step: '03', title: 'Execution', desc: 'Flawless implementation & management' },
              { step: '04', title: 'Optimization', desc: 'Monitoring & continuous improvement' }
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

      

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="border border-orange-900/50 bg-gradient-to-br from-orange-950/20 to-black p-12 rounded-lg text-center">
            <p className="text-orange-500 font-bold text-sm tracking-widest mb-4">READY TO ELEVATE YOUR BRAND?</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              With 20+ years of experience and a dedicated team, we're ready to transform your brand vision into reality across all marketing channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-orange-600 hover:bg-orange-600/10 font-bold transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-orange-500 font-bold text-sm mb-2">PHONE</p>
              <p className="text-white font-semibold">+91 9718 44 77 88</p>
              <p className="text-gray-400">+91 9716 44 77 88</p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-bold text-sm mb-2">EMAIL</p>
              <p className="text-white font-semibold">info@adstechindia.uk</p>
            </div>
            <div className="text-center">
              <p className="text-orange-500 font-bold text-sm mb-2">LOCATION</p>
              <p className="text-gray-400 text-sm">B-96, Qutub Vihar Phase-2<br/>New Delhi - 110071</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
