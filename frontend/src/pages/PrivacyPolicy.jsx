import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import ContactFormModal from "../components/ContactForm";

export default function PrivacyPolicy() {
    const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="w-full bg-black text-white overflow-hidden">

      {/* Navbar */}
      <Navbar onGetStarted={() => setContactOpen(true)} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-500 font-bold tracking-widest mb-4">
            LEGAL
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-400 text-lg">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-300 leading-relaxed">

          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Adstech India ("we", "our", or "us") respects your privacy and is
              committed to protecting the personal information you share with
              us through our website. This Privacy Policy describes how we
              collect, use, and safeguard your data when you visit our website
              or interact with our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>

            <p className="mb-3">
              We may collect the following types of information:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Your name, email address, and phone number.</li>
              <li>Business or project information submitted through forms.</li>
              <li>Communication details when you contact us.</li>
              <li>Website usage data such as pages visited and interaction time.</li>
            </ul>
          </div>

          {/* How we use */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Use Your Information
            </h2>

            <p className="mb-3">We use the information we collect to:</p>

            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Respond to inquiries and project requests.</li>
              <li>Provide marketing and branding services.</li>
              <li>Improve our website and user experience.</li>
              <li>Send important updates related to your inquiries.</li>
            </ul>
          </div>

          {/* Data protection */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Data Protection
            </h2>

            <p>
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Cookies
            </h2>

            <p>
              Our website may use cookies and analytics tools to improve user
              experience and understand how visitors interact with the site.
              These cookies do not collect personally identifiable information.
            </p>
          </div>

          {/* Third party */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Third-Party Services
            </h2>

            <p>
              We may use trusted third-party tools for analytics, hosting, or
              communication. These providers may process limited data necessary
              to perform their services but are required to maintain
              confidentiality.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Policy Updates
            </h2>

            <p>
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Contact Us
            </h2>

            <p>
              If you have questions regarding this Privacy Policy, you may
              contact us:
            </p>

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
