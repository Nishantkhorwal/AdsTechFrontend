import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServiceLayout({
  title,
  subtitle,
  heroImage,
  children,
}) {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="relative max-w-6xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black">
            {title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Page Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
