import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactFormModal from "../components/ContactForm";
import { useState } from "react";

export default function TermsConditions() {
    const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="w-full bg-black text-white overflow-hidden">

      {/* Navbar */}
      <Navbar onGetStarted={() => setContactOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-500 font-bold tracking-widest mb-4">
            LEGAL
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-400 text-lg">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300 leading-relaxed">

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              These Terms and Conditions govern your use of the Adstech India
              website and services. By accessing this website, you agree to
              comply with and be bound by these terms.
            </p>
          </div>

          {/* Use of website */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Use of Website
            </h2>

            <p className="mb-3">
              By using our website, you agree to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Use the website only for lawful purposes.</li>
              <li>Provide accurate information when submitting forms.</li>
              <li>Not misuse or attempt to disrupt website functionality.</li>
              <li>Respect all intellectual property rights.</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Services
            </h2>

            <p>
              Adstech India provides marketing, advertising, branding, event
              management, and fabrication services. Service agreements,
              pricing, and timelines will be defined separately through
              project proposals or contracts.
            </p>
          </div>

          {/* Intellectual property */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Intellectual Property
            </h2>

            <p>
              All content on this website including text, graphics, branding,
              and design elements are the property of Adstech India unless
              otherwise stated. Unauthorized reproduction or distribution of
              website content is strictly prohibited.
            </p>
          </div>

          {/* Limitation of liability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Limitation of Liability
            </h2>

            <p>
              While we strive to ensure accurate information on our website,
              Adstech India shall not be held responsible for any damages or
              losses resulting from the use of this website or reliance on the
              information provided.
            </p>
          </div>

          {/* Third party links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Third-Party Links
            </h2>

            <p>
              Our website may include links to third-party websites. We are
              not responsible for the content, privacy policies, or practices
              of these external websites.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Changes to Terms
            </h2>

            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time. Updates will be posted on this page.
            </p>
          </div>

          {/* Governing law */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Governing Law
            </h2>

            <p>
              These terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes will be subject to the
              jurisdiction of courts located in Gurugram, Haryana.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Contact Information
            </h2>

            <p>If you have questions about these terms, you may contact us:</p>

            <div className="mt-4 text-gray-400">
              <p>Email: info@adstechindia.uk</p>
              <p>Phone: +91 9718 44 77 88</p>
              <p>Location: Vipul Business Park, Sector-48, Gurugram</p>
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
