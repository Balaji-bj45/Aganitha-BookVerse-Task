import React from 'react';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(book.title)}&background=1f2937&color=e5e7eb&size=250&font-size=0.33`;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative group aspect-[2/3] overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-gray-900/50 shadow-lg"
    >
      <img
        src={coverUrl}
        alt={`Cover of ${book.title}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content that appears on hover */}
      <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/20">
        <h3 className="text-base sm:text-lg font-bold text-white" title={book.title}>
          {book.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 mt-1">
          {book.author_name && book.author_name[0]}
        </p>
        <div className="mt-2 sm:mt-4 flex items-center justify-between">
          <StarRating rating={book.ratings_average} />
          <span className="text-xs text-gray-400 font-mono bg-black/30 px-2 py-1 rounded">
            {book.first_publish_year}
          </span>
        </div>
      </div>

       {/* Minimal content always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-sm sm:text-base font-bold text-white truncate shadow-black [text-shadow:1px_1px_3px_var(--tw-shadow-color)]" title={book.title}>
          {/* FIX: Corrected typo from 'book.titlie' to 'book.title' */}
          {book.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default BookCard;