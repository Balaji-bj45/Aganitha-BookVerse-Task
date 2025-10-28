import React from 'react';

const Footer = () => (
  <footer className="relative z-10 mt-16">
    <div className="container mx-auto px-4 py-8 text-center text-gray-500 border-t border-white/10">
      <p>BookVerse &copy; {new Date().getFullYear()}. Crafted for Alex's journey into knowledge.</p>
      <p className="text-sm mt-1">
        Aganitha Book Finder Task {' '}
        {/* <a href="https://openlibrary.org/developers/api" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors">
          Open Library API
        </a> */}
      </p>
    </div>
  </footer>

);

export default Footer;