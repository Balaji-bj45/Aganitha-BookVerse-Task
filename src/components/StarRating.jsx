import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const stars = [];
  // The Open Library rating is out of 5, so we can use it directly
  const normalizedRating = rating;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= normalizedRating) {
      stars.push(<FaStar key={i} className="text-amber-400" />);
    } else if (i === Math.ceil(normalizedRating) && !Number.isInteger(normalizedRating)) {
      stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300 dark:text-gray-600" />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};
export default StarRating;