import React from "react";
import { Instagram } from "lucide-react";
import "./index.css";
// wth
function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 min-h-screen scroll-smooth">
      <header className="relative bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 text-white rounded-b-3xl shadow-xl overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center sm:justify-between p-6">
          <img
            src="/images/logo-cropped.jpg"
            alt="Semper Sublimation Logo"
            className="h-20 w-auto rounded-full border-4 border-white shadow-lg"
          />
          <div className="text-center sm:text-left mt-3 sm:mt-0">
            <h1 className="text-4xl font-extrabold">Semper Sublimation</h1>
            <p className="text-sm sm:text-base mt-1">
              ✅ Hello! This is a test to see if React renders.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto text-center p-6 my-10">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">
          Does this show up?
        </h2>
        <p className="text-gray-700">
          If you can read this on localhost, React + Vite are working.
        </p>
      </main>

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
