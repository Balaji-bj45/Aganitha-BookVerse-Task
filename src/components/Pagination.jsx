import React from 'react';

const Pagination = ({ currentPage, totalResults, limit, onPageChange }) => {
  const totalPages = Math.ceil(totalResults / limit);
  if (totalPages <= 1) return null;
  
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalResults);

  return (
    <nav className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6">
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 sm:mb-0">
        Showing <span className="font-semibold">{startItem.toLocaleString()}</span> to <span className="font-semibold">{endItem.toLocaleString()}</span> of{' '}
        <span className="font-semibold">{totalResults.toLocaleString()}</span> results
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </nav>
  );
};
export default Pagination;