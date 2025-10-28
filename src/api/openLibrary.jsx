import axios from 'axios';

const API_URL = 'https://openlibrary.org';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

/**
 * Searches for books directly from the Open Library API.
 * @param {object} params - The search parameters.
 * @param {string} params.query - The search term.
 * @param {string} params.type - The search type ('q', 'title', 'author').
 * @param {number} params.page - The current page number.
 * @param {number} params.limit - The number of results per page.
 * @returns {Promise<object>} - A promise that resolves to { books, total, page }.
 */
export const searchBooks = async ({ query, type, page, limit }) => {
  try {
    const apiParams = {
      page,
      limit,
    };

    // Construct the query based on the selected type for the Open Library API
    if (type === 'title') {
      apiParams.title = query;
    } else if (type === 'author') {
      apiParams.author = query;
    } else {
      apiParams.q = query; // 'q' is for a general keyword search
    }

    const response = await apiClient.get('/search.json', { params: apiParams });

    // Transform the raw API data into a clean format our app can use
    const books = response.data.docs.map(book => ({
      key: book.key,
      title: book.title || 'Unknown Title',
      author_name: book.author_name || ['Unknown Author'],
      first_publish_year: book.first_publish_year || 'N/A',
      cover_i: book.cover_i,
      ratings_average: book.ratings_average || 0,
      ratings_count: book.ratings_count || 0,
    }));

    return {
      books,
      total: response.data.numFound || 0,
      page: page,
    };
  } catch (error) {
    console.error('Failed to fetch books from Open Library:', error);
    if (error.response) {
      throw new Error(`The library seems to be having issues (Error ${error.response.status}). Please try again later.`);
    } else if (error.request) {
      throw new Error('Could not connect to the library. Please check your network connection.');
    } else {
      throw new Error('An unexpected error occurred while searching for books.');
    }
  }
};