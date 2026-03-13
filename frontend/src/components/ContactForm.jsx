import { useEffect, useState } from "react";
import "../App.css";

export default function ContactFormModal({ isOpen, onClose }) {
  const API_URL = import.meta.env.VITE_API_URL;


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectTitle: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          projectTitle: "",
          message: ""
        });
        onClose();
      } else {
        alert("Something went wrong.");
      }

    } catch (error) {
      alert("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center">

      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-3xl mx-4 mt-10 bg-gradient-to-br from-zinc-900 to-black border border-orange-900/40 rounded-xl shadow-2xl shadow-orange-600/20 animate-slideDown">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 text-xl"
        >
          ✕
        </button>

        <div className="p-8 md:p-12">

          <div className="text-center mb-10">
            <p className="text-orange-500 text-sm font-bold tracking-widest mb-2">
              START A PROJECT
            </p>

            <h2 className="text-3xl md:text-4xl font-black">
              Let's Build Something Great
            </h2>

            <p className="text-gray-400 mt-3">
              Tell us about your project and our team will contact you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 bg-black border border-orange-900/40 rounded-md focus:border-orange-500 focus:outline-none text-white transition"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 bg-black border border-orange-900/40 rounded-md focus:border-orange-500 focus:outline-none text-white transition"
              />

            </div>

            <input
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              type="text"
              placeholder="Project Title"
              required
              className="w-full px-5 py-3 bg-black border border-orange-900/40 rounded-md focus:border-orange-500 focus:outline-none text-white transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your project..."
              required
              className="w-full px-5 py-3 bg-black border border-orange-900/40 rounded-md focus:border-orange-500 focus:outline-none text-white resize-none transition"
            />

            <div className="flex justify-center pt-4">

              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-black font-bold rounded-md transition-all hover:shadow-lg hover:shadow-orange-600/40"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
