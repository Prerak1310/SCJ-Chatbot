import React from 'react';
import { FaFilm, FaGamepad, FaTheaterMasks } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 text-white drop-shadow-lg">
          Welcome to <span className="text-blue-400">SCJ Entertainments</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Dive into a universe of movies, shows, games, and endless fun—all in one place.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg transition">
          Explore Now
        </button>
      </div>

      {/* Features */}
      <div className="py-16 px-6 bg-blue-950/80">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {/* Movies */}
          <div className="bg-blue-900 rounded-xl p-6 text-center shadow-md hover:scale-105 transition duration-300">
            <FaFilm className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Movies & Shows</h3>
            <p className="text-sm text-gray-300">
              Stream the latest blockbusters and binge-worthy series curated just for you.
            </p>
          </div>

          {/* Games */}
          <div className="bg-blue-900 rounded-xl p-6 text-center shadow-md hover:scale-105 transition duration-300">
            <FaGamepad className="text-4xl text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Interactive Games</h3>
            <p className="text-sm text-gray-300">
              Play thrilling games and test your skills with our in-browser entertainment.
            </p>
          </div>

          {/* Events */}
          <div className="bg-blue-900 rounded-xl p-6 text-center shadow-md hover:scale-105 transition duration-300">
            <FaTheaterMasks className="text-4xl text-pink-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Live Events</h3>
            <p className="text-sm text-gray-300">
              Join virtual events, quizzes, and community fun live with SCJ Entertainments.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-12 bg-blue-950/90 border-t border-blue-800">
        <h3 className="text-2xl font-semibold mb-3">Ready to start your journey?</h3>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

