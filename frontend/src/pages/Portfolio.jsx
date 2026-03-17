import {   useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactFormModal from '../components/ContactForm';
import LazyImage from '../components/LazyImage';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
   const [contactOpen, setContactOpen] = useState(false);

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
      id: 87,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor71.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 88,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor72.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 89,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor73.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 90,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor74.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 91,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor75.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 92,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor76.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 93,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor77.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 94,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor78.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 95,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor79.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 96,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor80.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 97,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor81.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 98,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor82.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 99,
      category: 'Events & Activation',
      image: 'portfolio2/Event1.png?w=800&h=400&fit=crop',
    },
    {
      id: 100,
      category: 'Events & Activation',
      image: 'portfolio2/Event2.png?w=800&h=400&fit=crop',
    },
    {
      id: 101,
      category: 'Events & Activation',
      image: 'portfolio2/Event3.png?w=800&h=400&fit=crop',
    },
    {
      id: 102,
      category: 'Events & Activation',
      image: 'portfolio2/Event4.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 103,
      category: 'Events & Activation',
      image: 'portfolio2/Event5.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 104,
      category: 'Events & Activation',
      image: 'portfolio2/Event6.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 105,
      category: 'Events & Activation',
      image: 'portfolio2/Event7.png?w=800&h=400&fit=crop',
    },
    {
      id: 106,
      category: 'Events & Activation',
      image: 'portfolio2/Event8.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 107,
      category: 'Events & Activation',
      image: 'portfolio2/Event9.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 1,
      category: 'Outdoor Advertising',
      image: 'portfolio/Unipole1.png?w=800&h=400&fit=crop',
    },
    {
      id: 2,
      category: 'Outdoor Advertising',
      image: 'portfolio/Unipole3.png?w=800&h=400&fit=crop',
    },
    {
      id: 3,
      category: 'Outdoor Advertising',
      image: 'portfolio/MetroAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 4,
      category: 'Events & Activation',
      image: 'portfolio/Event1.png?w=800&h=400&fit=crop',
    },
    {
      id: 5,
      category: 'Events & Activation',
      image: 'portfolio/Event2.png?w=800&h=400&fit=crop',
    },
    {
      id: 6,
      category: 'Outdoor Advertising',
      image: 'portfolio/GateAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 7,
      category: 'Outdoor Advertising',
      image: 'portfolio/Paras1.png?w=800&h=400&fit=crop',
    },
    {
      id: 8,
      category: 'Outdoor Advertising',
      image: 'portfolio/Paras2.png?w=800&h=400&fit=crop',
    },
    {
      id: 9,
      category: 'Outdoor Advertising',
      image: 'portfolio/Paras3.png?w=800&h=400&fit=crop',
    },
    {
      id: 10,
      category: 'Outdoor Advertising',
      image: 'portfolio/Paras4.png?w=800&h=400&fit=crop',
    },
    {
      id: 11,
      category: 'Outdoor Advertising',
      image: 'portfolio/BusAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 12,
      category: 'Outdoor Advertising',
      image: 'portfolio/AutoAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 13,
      category: 'Outdoor Advertising',
      image: 'portfolio/MetroAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 14,
      category: 'Outdoor Advertising',
      image: 'portfolio/TruckAd.png?w=800&h=400&fit=crop',
    },
    {
      id: 15,
      category: 'Retail',
      image: 'portfolio/CHD2.png?w=800&h=400&fit=crop',
    },
    {
      id: 16,
      category: 'Retail',
      image: 'portfolio/CHD1.png?w=800&h=400&fit=crop',
    },
    {
      id: 17,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor1.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 18,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor2.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 19,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor3.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 20,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor4.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 21,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor5.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 22,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor6.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 23,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor7.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 24,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor8.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 25,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor9.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 26,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor10.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 27,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor11.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 28,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor12.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 29,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor13.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 30,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor14.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 31,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor15.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 32,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor16.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 33,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor17.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 34,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor18.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 35,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor19.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 36,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor20.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 37,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor21.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 38,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor22.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 39,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor23.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 40,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor24.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 41,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor25.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 42,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor26.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 43,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor27.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 44,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor28.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 45,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor29.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 46,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor30.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 47,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor31.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 48,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor32.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 49,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor33.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 50,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor34.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 51,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor35.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 52,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor36.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 53,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor37.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 54,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor38.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 55,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor39.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 56,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor40.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 57,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor41.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 58,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor42.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 59,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor43.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 60,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor44.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 61,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor45.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 62,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor46.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 63,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor47.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 64,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor48.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 65,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor49.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 66,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor50.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 67,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor51.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 68,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor52.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 69,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor53.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 70,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor54.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 71,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor55.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 72,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor56.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 73,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor57.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 74,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor58.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 75,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor59.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 76,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor60.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 77,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor61.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 78,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor62.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 79,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor63.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 80,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor64.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 81,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor65.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 82,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor66.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 83,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor67.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 84,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor68.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 85,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor69.jpeg?w=800&h=400&fit=crop',
    },
    {
      id: 86,
      category: 'Outdoor Advertising',
      image: 'portfolio2/Outdoor70.jpeg?w=800&h=400&fit=crop',
    }



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
      <Navbar onGetStarted={() => setContactOpen(true)} />

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
                <LazyImage
                  src={item.image}
                  alt={item.title}
                  className="transform group-hover:scale-110 transition-transform duration-700"
                >

                  {/* Bottom Left Title */}
                  <div className="absolute bottom-4 px-2 py-1 bg-black/70 rounded-md left-4 z-10">
                    <p className="text-orange-400  text-xs font-bold">
                      {item.category}
                    </p>
                  </div>
                </LazyImage>




                {/* Dark Overlay */}
                {/* <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-all duration-300"></div> */}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="transform group-hover:translate-y-0 transition-transform">
                    <p className="text-orange-400 text-sm font-bold mb-2">{item.category}</p>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>
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
      <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <Footer />
    </div>
  );
}
