import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('q');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query, type);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-4xl mx-auto">
      {/* Mobile Layout - Stacked */}
      <div className="block md:hidden space-y-3">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <FiSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
            className="w-full pl-12 pr-4 py-4 text-base text-gray-200 bg-black/40 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
        </div>

        {/* Controls Row */}
        <div className="flex space-x-3">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="flex-1 px-4 py-3 text-gray-300 bg-black/40 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          >
            <option value="q" className="bg-gray-800">Keyword</option>
            <option value="title" className="bg-gray-800">Title</option>
            <option value="author" className="bg-gray-800">Author</option>
          </select>
          
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-2xl hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75 disabled:bg-violet-900/50 disabled:cursor-not-allowed transition-colors min-w-[100px]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isLoading ? 'loading' : 'search'}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.1 }}
              >
                {isLoading ? '...' : 'Search'}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Tablet Layout - Compact */}
      <div className="hidden md:block lg:hidden">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none z-10">
            <FiSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books by keyword, title, or author..."
            className="w-full pl-14 pr-32 py-4 text-base text-gray-200 bg-black/40 border border-white/10 rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center space-x-2">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-10 rounded-full border-none bg-transparent px-3 text-gray-300 focus:ring-0 focus:outline-none text-sm"
            >
              <option value="q" className="bg-gray-800">Keyword</option>
              <option value="title" className="bg-gray-800">Title</option>
              <option value="author" className="bg-gray-800">Author</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75 disabled:bg-violet-900/50 disabled:cursor-not-allowed transition-colors text-sm"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isLoading ? 'loading' : 'search'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.1 }}
                >
                  {isLoading ? '...' : 'Search'}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Full */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none z-10">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Summon books by keyword, title, or author..."
            className="w-full pl-14 pr-40 py-4 text-lg text-gray-200 bg-black/40 border border-white/10 rounded-full shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="h-full rounded-full border-none bg-transparent px-4 text-gray-300 focus:ring-0 focus:outline-none"
            >
              <option value="q" className="bg-gray-800">Keyword</option>
              <option value="title" className="bg-gray-800">Title</option>
              <option value="author" className="bg-gray-800">Author</option>
            </select>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2.5 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75 disabled:bg-violet-900/50 disabled:cursor-not-allowed transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isLoading ? 'loading' : 'search'}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.1 }}
                >
                  {isLoading ? '...' : 'Seek'}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;