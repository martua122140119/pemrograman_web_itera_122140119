import { useContext, useMemo } from 'react';
import { BookContext } from '../context/BookContext';

const useBookStats = () => {
  const { books } = useContext(BookContext);
  
  const stats = useMemo(() => {
    const totalBooks = books.length;
    const ownedBooks = books.filter(book => book.status === 'owned').length;
    const readingBooks = books.filter(book => book.status === 'reading').length;
    const toBuyBooks = books.filter(book => book.status === 'tobuy').length;
    
    const recentlyAdded = [...books]
      .sort((a, b) => b.id - a.id)
      .slice(0, 5);
    
    // Calculate most common author
    const authorCount = books.reduce((acc, book) => {
      acc[book.author] = (acc[book.author] || 0) + 1;
      return acc;
    }, {});
    
    let topAuthor = null;
    let maxCount = 0;
    
    Object.entries(authorCount).forEach(([author, count]) => {
      if (count > maxCount) {
        maxCount = count;
        topAuthor = author;
      }
    });
    
    return {
      totalBooks,
      ownedBooks,
      readingBooks,
      toBuyBooks,
      recentlyAdded,
      topAuthor,
      authorBookCount: maxCount || 0
    };
  }, [books]);
  
  return stats;
};

export default useBookStats;