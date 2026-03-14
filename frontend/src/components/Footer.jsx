import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";


function Footer() {
  return (
    <>
      <footer className="border-t border-orange-900/30 py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img className='w-40' src='/logo.png'></img>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforming brands through innovative marketing solutions and creative excellence.
              </p>
            <div className="flex gap-3 mt-4">

              <Link
                to=""
                className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </Link>

              <Link
                to=""
                className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
              >
                <Linkedin size={16} />
              </Link>

              <Link
                to=""
                className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </Link>

              <Link
                to=""
                className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors"
              >
                <Twitter size={16} />
              </Link>

            </div>

            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-sm">SERVICES</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link to="/digital-marketing" className="hover:text-orange-500 transition-colors">Digital Marketing</Link></li>
                <li><Link to="/outdoor-print" className="hover:text-orange-500 transition-colors">Outdoor</Link></li>
                <li><Link to="/event&management" className="hover:text-orange-500 transition-colors">Events & Activation</Link></li>
                <li><Link to="/retail&fabrication" className="hover:text-orange-500 transition-colors">Retail & Fabrication</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-sm">Digital Marketing</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link to="/digital-marketing/seo" className="hover:text-orange-500 transition-colors">SEO & SEM</Link></li>
                <li><Link to="/digital-marketing/social-media" className="hover:text-orange-500 transition-colors">Social Media</Link></li>
                <li><Link to="/digital-marketing/content-strategy" className="hover:text-orange-500 transition-colors">Content Strategy</Link></li>
                <li><Link to="/digital-marketing/performance-marketing" className="hover:text-orange-500 transition-colors">Performance Marketing</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-sm">About Us</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><Link to="/portfolio" className="hover:text-orange-500 transition-colors">Portfolio</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm">CONTACT</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="hover:text-orange-500 transition-colors">
                  <span className="font-semibold text-white">Email:</span><br/>
                  info@adstechindia.uk
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  <span className="font-semibold text-white">Location:</span><br/>
                  101, 1st Floor, Vipul Business Park, Sohna Road, Sector-48, Gurugram, Haryana-122018
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-orange-900/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© 2024 ADSTECH INDIA PVT.LTD. All rights reserved.</p>
              <div className="flex gap-6">
                <Link to="/privacy-policy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                <Link to="/terms-condition" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>  
    </>
  )
}

export default Footer