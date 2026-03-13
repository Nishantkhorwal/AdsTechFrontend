import { useEffect, useState } from 'react';
import "../App.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactFormModal from '../components/ContactForm';

export default function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [contactOpen, setContactOpen] = useState(false);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
    message: ""
  });

  
const portfolioItems = [
    {
      title: 'Outdoor Activation',
      category: 'Print & Outdoor',
      image: 'portfolio/Paras3.png'
    },
    {
      title: 'Outdoor Activation',
      category: 'Print & Outdoor',
      image: 'portfolio/TruckAd.png'
    },
    {
      title: 'Event Marketing',
      category: 'Events',
      image: 'portfolio/Event1.png'
    },
    {
      title: 'Outdoor Activation',
      category: 'Print & Outdoor',
      image: 'portfolio/MetroAd.png'
    }
  ];

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        projectTitle: "",
        message: ""
      });
    } else {
      alert("Failed to send message.");
    }

  } catch (error) {
    console.error(error);
    alert("Error sending message");
  }
};

  

  

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* Navigation */}
      <Navbar onGetStarted={() => setContactOpen(true)} />

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
                <button
                onClick={() => setContactOpen(true)}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50">
                  Start Project
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
      title: 'Outdoor',
      description: 'Strategic outdoor advertising and print campaigns that create lasting impressions in the physical world.',
      link: '/outdoor-print',
      icon: '01'
    },
    {
      title: 'Events & Activation',
      description: 'Experiential marketing events that bring your brand to life.',
      link: '/event&management',
      icon: '02'
    },
    {
      title: 'Retail & Fabrication',
      description: 'Experiential retail solutions that engage customers, elevate brand presence, and create memorable in-store experiences.',
      link: '/retail&fabrication',
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
        <Link className=' transform group-hover:translate-x-2 transition-transform duration-300' to={service.link}>
   
          Explore →
      
        </Link>
        
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
            <Link to="/portfolio" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold transition-all hover:shadow-lg hover:shadow-orange-600/50">
              View Portfolio
            </Link>
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
                />
              </div>
              <input 
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
               
                onChange={handleChange}
                placeholder="Project Title" 
                className="w-full px-6 py-3 bg-black border border-orange-900/30 hover:border-orange-600/50 focus:border-orange-600 focus:outline-none transition-colors text-white"
              />
              <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
      <ContactFormModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <Footer/>
    </div>
  );
}