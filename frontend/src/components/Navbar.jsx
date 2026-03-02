import { useEffect, useState } from 'react';
import "../App.css"

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
    const navLinks = [
      { label: 'Home', id: 'home' },
      { label: 'Services', id: 'services', hasDropdown: true },
      { label: 'Process', id: 'process' },
      { label: 'Portfolio', id: 'portfolio' },
      { label: 'Contact', id: 'contact' }
    ];

  const services = [
    { title: 'Digital Marketing', items: ['SEO & SEM', 'Social Media', 'Content Strategy', 'Email Marketing', 'Influencer Marketing'] },
    { title: 'Outdoor & Print', items: ['Billboard Design', 'Print Advertising', 'Outdoor Activations', 'Signage', 'Direct Mail'] },
    { title: 'Events & Retail', items: ['Event Marketing', 'Retail Activations', 'Brand Activations', 'Trade Shows', 'Pop-up Stores'] },
    { title: 'Creative Services', items: ['Brand Identity', 'UI/UX Design', 'Video Production', 'Photography', 'Animation'] }
  ];
  // ✅ Added hover handlers with delay
  const handleServicesEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setServicesHovered(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setServicesHovered(false);
    }, 200); // 200ms delay before closing
    setHoverTimeout(timeout);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    
   <div>
<nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md border-b border-orange-900/30' : " md:bg-transparent bg-black/95"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AD</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ADSTECH</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.id} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setServicesHovered(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesHovered(false)}
                >
                  <button className="text-sm px-4 py-2 transition-colors relative">
                    <span className="text-white hover:text-orange-500 transition-colors">
                      {link.label}
                    </span>
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 transition-all duration-300 ${
                      (link.hasDropdown && servicesHovered) ? 'scale-x-100' : 'scale-x-0'
                    } origin-left`}></span>
                  </button>
                  

                </div>
              ))}
            </div>

            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-colors">
                Get Started
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-orange-900/30 pt-4">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <button
                    onClick={() => link.hasDropdown && setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left px-4 py-2 hover:text-orange-500 transition-colors text-sm flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <span className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    )}
                  </button>
                  {link.hasDropdown && mobileServicesOpen && (
                    <div className="bg-orange-900/10 rounded ml-4 mt-2 space-y-4 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {services.map((service) => (
                        <div key={service.title}>
                          <h4 className="text-xs font-semibold text-orange-500 mb-2">{service.title}</h4>
                          <ul className="space-y-1">
                            {service.items.map((item) => (
                              <li key={item}>
                                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full mt-4 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-colors">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Full Screen Services Dropdown */}
      <div 
        className={`fixed top-20 left-0 right-0 z-40 transition-all duration-300 ease-out ${
          servicesHovered 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        }`}
        onMouseEnter={handleServicesEnter}
        onMouseLeave={handleServicesLeave}
      >
        <div className="w-full bg-black/95 backdrop-blur-md border-b border-orange-900/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {services.map((service, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-500 border-b border-orange-900/30 pb-3">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i}>
                        <a 
                          href="#" 
                          className="text-sm text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 group"
                        >
                          <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-orange-900/30 flex items-center justify-between">
              <p className="text-sm text-gray-400">Explore our comprehensive range of marketing solutions designed to elevate your brand.</p>
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/50">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
   </div>
        
    

  )
}

export default Navbar


