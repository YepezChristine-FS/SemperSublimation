import React from "react";
import { Instagram } from "lucide-react";
import "./index.css";

function App() {
  const gallery = Array.from({ length: 12 }, (_, i) => ({
    title: `Custom Jersey ${i + 1}`,
    img: `/images/${i + 1}.JPG`,
  }));

  const testimonials = [
    {
      name: "Ashley M.",
      quote: "Semper Sublimation made our team shine! Amazing quality.",
    },
    {
      name: "Coach Rick",
      quote: "Quick turnaround, custom designs — ordering again!",
    },
    {
      name: "Tina S.",
      quote: "They nailed the colors and details. Super happy!",
    },
  ];

  return (
    <div className="font-poppins bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 min-h-screen scroll-smooth">
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 text-white rounded-b-3xl shadow-xl overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between p-6 animate-fade-in">
          <img
            src="/images/logo-cropped.jpg"
            alt="Semper Sublimation Logo"
            className="h-20 w-auto rounded-full border-4 border-white shadow-lg"
            loading="lazy"
          />
          <div className="text-center sm:text-left mt-3 sm:mt-0">
            <h1 className="text-4xl font-extrabold drop-shadow">
              Semper Sublimation
            </h1>
            <p className="text-sm sm:text-base mt-1">
              Custom Jerseys, Shirts & Apparel — Veteran Owned & Operated
            </p>
            <a
              href="#contact"
              className="inline-block mt-3 bg-white text-red-600 px-5 py-2 rounded-full shadow hover:bg-yellow-100 transition text-sm font-semibold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto text-center p-6 my-10 animate-slide-up">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          We specialize in crafting top-quality custom sports jerseys, shirts,
          and apparel. As a proud veteran-owned business, we are passionate
          about helping teams, clubs, and organizations stand out with style,
          quality, and pride.
        </p>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="max-w-6xl mx-auto p-6 animate-slide-up">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Product Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition overflow-hidden"
            >
              <div className="aspect-square w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-sm font-medium text-gray-700 truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white bg-opacity-80 py-10 animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          What Our Customers Say
        </h2>
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition"
            >
              <p className="text-sm text-gray-600 italic">“{t.quote}”</p>
              <p className="mt-2 font-semibold text-gray-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM EMBED */}
      <section className="max-w-6xl mx-auto p-6 text-center animate-slide-up">
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Instagram</h2>
        <div className="flex justify-center">
          <iframe
            src="https://snapwidget.com/embed/123456"
            className="w-full max-w-xl h-[400px] border-0"
            allowtransparency="true"
            title="Instagram Feed"
          ></iframe>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="max-w-3xl mx-auto p-6 bg-white bg-opacity-90 rounded-xl shadow-lg my-10 animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-green-600 mb-4">
          Contact Us
        </h2>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="grid gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 text-center text-gray-500 text-xs p-6">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <Instagram className="w-5 h-5 text-pink-500" />
          <a
            href="https://www.instagram.com/semper_sublimation/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 font-medium"
          >
            Follow us on Instagram
          </a>
        </div>
        &copy; {new Date().getFullYear()} Semper Sublimation. All rights
        reserved.
      </footer>
    </div>
  );
}

export default App;
