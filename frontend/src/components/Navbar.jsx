import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../App.css"

function Navbar({ onGetStarted }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '#', hasDropdown: true },
    { label: 'Portfolio', path: '/portfolio' },
  ];

  const services = [
    { 
      title: 'Digital Marketing',
      link: '/digital-marketing',
      items: [
        { label: 'Web Development', link: '/digital-marketing/web-development' },
        { label: 'Graphic Designing', link: '/digital-marketing/graphic-design' },
        { label: 'SEO & SEM', link: '/digital-marketing/seo' },
        { label: 'Social Media', link: '/digital-marketing/social-media' },
        { label: 'Content Strategy', link: '/digital-marketing/content-strategy' },
        { label: 'Performance Marketing (Google & Meta Ads)', link: '/digital-marketing/performance-marketing' }
      ] 
    },
    { 
      title: 'Outdoor & Print',
      link: '/outdoor-print',
      items: [] 
    },
    { 
      title: 'Retail & Fabrication',
      link: '/retail&fabrication',
      items: [
      ] 
    },
    { 
      title: 'Events And Management',
      link: '/event&management',
      items: [
      ] 
    }
  ];

  // Clear any existing timeout
  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Handle mouse enter on Services link or dropdown
  const handleServicesEnter = () => {
    clearHoverTimeout();
    setServicesHovered(true);
  };

  // Handle mouse leave with delay
  const handleServicesLeave = () => {
    clearHoverTimeout();
    
    // Set a timeout to close the dropdown after 300ms
    // This gives users time to move from the Services link to the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesHovered(false);
    }, 300); // 300ms delay - adjust this value as needed
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      clearHoverTimeout();
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md border-b border-orange-900/30' : " md:bg-transparent bg-black/95"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
              <img className='w-40' src='/logo.png'></img>
            </div>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
<div className="hidden md:flex items-center gap-1">
  {navLinks.map((link) => (
    <div
      key={link.path}
      className="relative"
      onMouseEnter={() => link.hasDropdown && handleServicesEnter()}
      onMouseLeave={() => link.hasDropdown && handleServicesLeave()}
    >
      <Link
        to={link.path}
        className={`text-sm px-4 py-2 transition-colors relative ${
          isActive(link.path)
            ? "text-orange-500"
            : "text-white hover:text-orange-500"
        }`}
      >
        {link.label}

        <span
          className={`absolute bottom-0 left-4 right-4 h-0.5 bg-orange-500 transition-all duration-300 ${
            isActive(link.path) || (link.hasDropdown && servicesHovered)
              ? "scale-x-100"
              : "scale-x-0"
          } origin-left`}
        ></span>
      </Link>

      {/* Small Services Dropdown */}
      {link.hasDropdown && servicesHovered && (
        <div className="absolute left-0 mt-4 w-48 bg-black border border-orange-900/30 rounded-md shadow-lg">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              
              <Link
                to={service.link}
                className="flex justify-between items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-orange-900/20 transition"
              >
                {service.title}
              </Link>

              {/* Side Submenu */}
              {service.items.length > 0 && (
                <div className="absolute left-full top-0 ml-1 w-64 bg-black border border-orange-900/30 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  {service.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.link}
                      className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-orange-900/20 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}


            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</div>


            {/* CTA Button and Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <button 
              onClick={onGetStarted}
              className="hidden md:block px-6 py-2 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-colors">
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
                <div key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => link.hasDropdown && setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full text-left px-4 py-2 hover:text-orange-500 transition-colors text-sm flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <span className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    )}
                  </Link>

                  {link.hasDropdown && mobileServicesOpen && (
                    <div className="bg-orange-900/10 rounded h-44 overflow-x-hidden ml-4 mt-2 space-y-4 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      {services.map((service) => (
                        <div key={service.title}>
                          
                          {/* Digital Marketing Title Clickable */}
                          {service.link ? (
                            <Link to={service.link} className="text-xs font-semibold text-orange-500 mb-2 block hover:text-white transition-colors">
                              {service.title}
                            </Link>
                          ) : (
                            <h4 className="text-xs font-semibold text-orange-500 mb-2">
                              {service.title}
                            </h4>
                          )}

                          <ul className="space-y-1">
                            {service.items.map((item) => (
                              <li key={item.label}>
                                <Link to={item.link} className="text-xs text-gray-400 hover:text-white transition-colors">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
              onClick={onGetStarted}
              className="w-full mt-4 px-6 py-2 bg-orange-600 hover:bg-orange-700 text-black font-semibold transition-colors">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Full Screen Services Dropdown */}
      {/*  */}
    </div>
  );
}

export default Navbar;