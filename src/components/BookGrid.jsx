import React from 'react';
import { motion } from 'framer-motion';
import BookCard from './BookCard';
import SkeletonCard from './SkeletonCard';

const BookGrid = ({ books, isLoading }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 } 
    },
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, index) => <SkeletonCard key={index} />)}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-gray-900/30 border border-white/10 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-300">The Archives are Empty</h3>
        <p className="text-gray-500 mt-2">No tomes matched your incantation. Please try another.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      {books.map((book) => <BookCard key={book.key} book={book} />)}
    </motion.div>
  );
};
export default BookGrid;