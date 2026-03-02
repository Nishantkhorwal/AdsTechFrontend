import React from 'react'

function Footer() {
  return (
    <>
      <footer className="border-t border-orange-900/30 py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">AD</span>
                </div>
                <div>
                  <p className="font-bold text-sm">ADSTECH</p>
                  <p className="text-xs text-gray-400">INDIA PVT.LTD.</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforming brands through innovative marketing solutions and creative excellence.
              </p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors text-xs">f</a>
                <a href="#" className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors text-xs">in</a>
                <a href="#" className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors text-xs">ig</a>
                <a href="#" className="w-8 h-8 bg-orange-600/20 hover:bg-orange-600 rounded flex items-center justify-center transition-colors text-xs">tw</a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4 text-sm">SERVICES</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Outdoor & Print</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Events & Retail</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Creative Design</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Brand Strategy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Video Production</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4 text-sm">COMPANY</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">News</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold mb-4 text-sm">RESOURCES</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Marketing Guide</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Industry Reports</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4 text-sm">CONTACT</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="hover:text-orange-500 transition-colors">
                  <span className="font-semibold text-white">Phone:</span><br/>
                  +91 9718 44 77 88
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  <span className="font-semibold text-white">Email:</span><br/>
                  info@adstechindia.uk
                </li>
                <li className="hover:text-orange-500 transition-colors">
                  <span className="font-semibold text-white">Location:</span><br/>
                  Gurgram, India
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-orange-900/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
              <p>© 2024 ADSTECH INDIA PVT.LTD. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>  
    </>
  )
}

export default Footer