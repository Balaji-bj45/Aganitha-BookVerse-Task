import React from 'react';
// FIX: Replaced the non-existent FaBookSpells with the real FaFeatherAlt icon
import { FaFeatherAlt } from 'react-icons/fa';

const Header = () => (
  <header className="sticky top-0 z-20">
    <div className="container mx-auto px-4 py-4">
      <div className="float-left flex items-center gap-3 rounded-full border border-white/10 bg-black/30 p-2 pr-4 shadow-lg backdrop-blur-xl">
        {/* FIX: Use the real icon component here */}
        <FaFeatherAlt className="text-violet-400 text-3xl" />
        <h1 className="text-xl font-bold text-gray-200 tracking-wider">BookVerse</h1>
      </div>
    </div>
  </header>
);

export default Header;