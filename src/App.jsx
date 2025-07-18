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
    <div className="font-sans bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 min-h-screen scroll-smooth">
      {/* HERO SECTION */}
      <header className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 text-white py-10 shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            Semper Sublimation
          </h1>
          <p className="mt-2 text-lg sm:text-xl">
            Custom Jerseys, Shirts & Apparel — Veteran Owned
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-yellow-100 transition"
          >
            Get a Quote
          </a>
        </div>
      </header>

      <div className="bg-red-500 text-white p-4">TAILWIND IS WORKING</div>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto text-center p-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">About Us</h2>
        <p className="text-gray-700 leading-relaxed">
          We craft top-quality custom sports jerseys, shirts, and apparel. As a
          veteran-owned business, we help teams and organizations stand out with
          style and pride.
        </p>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="max-w-6xl mx-auto p-6">
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
      <section className="bg-white bg-opacity-80 py-10">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          What Our Customers Say
        </h2>
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-4">
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

      {/* CONTACT FORM */}
      <section
        id="contact"
        className="max-w-3xl mx-auto p-6 bg-white bg-opacity-90 rounded-xl shadow-lg my-10"
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
