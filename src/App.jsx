import React, { useState, useEffect, useCallback } from 'react';
import { searchBooks } from './api/openLibrary';

import Header from './components/Header';
import Hero from './components/Hero';
import BookGrid from './components/BookGrid';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

const RESULTS_PER_PAGE = 18; // Adjusted for a 6-column layout on large screens
// Main Application Component
// Handles state management, search logic, and layout/rendering
//final application.

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [searchParams, setSearchParams] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageTitle, setPageTitle] = useState('Featured Worlds');

  // Interactive background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const executeSearch = useCallback(async (params, page) => {
    setIsLoading(true);
    setError('');
    
    try {
      const data = await searchBooks({ ...params, page, limit: RESULTS_PER_PAGE });
      setBooks(data.books);
      setTotalResults(data.total);
      setCurrentPage(data.page);
    } catch (err) {
      setError(err.message);
      setBooks([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!searchParams) {
      setPageTitle('Featured Worlds');
      executeSearch({ query: 'science fiction classics', type: 'q' }, 1);
    }
  }, [searchParams, executeSearch]);

  useEffect(() => {
    if (searchParams) {
      setPageTitle(`Found in the Archives: "${searchParams.query}"`);
      executeSearch(searchParams, currentPage);
    }
  }, [searchParams, currentPage, executeSearch]);

  const handleSearch = (query, type) => {
    setCurrentPage(1);
    setSearchParams({ query, type });
  };
  
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalResults / RESULTS_PER_PAGE)) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 200, behavior: 'smooth' }); // Scroll past hero
    }
  };

  return (
    <div className="relative min-h-screen font-sans">
      {/* The Interactive Aurora Background */}
      <div className="aurora-background"></div>

      <Header />
      
      <main className="relative z-10">
        <Hero onSearch={handleSearch} isLoading={isLoading && !!searchParams} />
        
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            {pageTitle}
          </h2>
          
          {error && (
            <div className="text-center py-10 px-4 bg-red-900/30 border border-red-500/30 rounded-lg">
              <h3 className="text-xl font-semibold text-red-300">A Glitch in the Cosmos</h3>
              <p className="text-red-400 mt-2">{error}</p>
            </div>
          )}

          <BookGrid books={books} isLoading={isLoading} />

          {totalResults > RESULTS_PER_PAGE && !isLoading && (
            <Pagination
              currentPage={currentPage}
             totalResults={totalResults}
              limit={RESULTS_PER_PAGE}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;