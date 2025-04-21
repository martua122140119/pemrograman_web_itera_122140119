import { renderHook } from '@testing-library/react-hooks';
import { BookProvider } from '../../context/BookContext';
import useBookStats from './useBookStats';

describe('useBookStats hook', () => {
  const wrapper = ({ children }) => (
    <BookProvider value={{ books: mockBooks }}>
      {children}
    </BookProvider>
  );

  const mockBooks = [
    { id: 1, title: 'Book 1', author: 'Author A', status: 'owned' },
    { id: 2, title: 'Book 2', author: 'Author A', status: 'reading' },
    { id: 3, title: 'Book 3', author: 'Author B', status: 'owned' }
  ];

  test('calculates correct statistics', () => {
    const { result } = renderHook(() => useBookStats(), { wrapper });
    
    expect(result.current.totalBooks).toBe(3);
    expect(result.current.ownedBooks).toBe(2);
    expect(result.current.readingBooks).toBe(1);
    expect(result.current.toBuyBooks).toBe(0);
    expect(result.current.topAuthor).toBe('Author A');
    expect(result.current.authorBookCount).toBe(2);
  });

  test('returns recently added books', () => {
    const { result } = renderHook(() => useBookStats(), { wrapper });
    
    expect(result.current.recentlyAdded.length).toBe(3);
    expect(result.current.recentlyAdded[0].title).toBe('Book 3');
  });
});