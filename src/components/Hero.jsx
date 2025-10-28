import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero = ({ onSearch, isLoading }) => (
  <div className="relative text-center py-24 sm:py-32">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
    >
      Explore the Universe of Stories
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-4 max-w-2xl mx-auto text-lg text-gray-400"
    >
      Alex, your next adventure awaits. What knowledge do you seek?
    </motion.p>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-10 max-w-2xl mx-auto px-4"
    >
      <SearchBar onSearch={onSearch} isLoading={isLoading} />
    </motion.div>
  </div>
);

export default Hero;