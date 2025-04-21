import { render, screen } from '@testing-library/react';
import { BookProvider } from '../../context/BookContext';
import BookList from './BookList';

describe('BookList Component', () => {
  const mockBooks = [
    { id: 1, title: 'React Basics', author: 'John Doe', status: 'owned' },
    { id: 2, title: 'Advanced React', author: 'Jane Smith', status: 'reading' }
  ];

  test('renders book items', () => {
    render(
      <BookProvider value={{ filteredBooks: mockBooks }}>
        <BookList />
      </BookProvider>
    );

    expect(screen.getByText('React Basics')).toBeInTheDocument();
    expect(screen.getByText('Advanced React')).toBeInTheDocument();
  });

  test('shows empty message when no books', () => {
    render(
      <BookProvider value={{ filteredBooks: [] }}>
        <BookList />
      </BookProvider>
    );

    expect(screen.getByText(/Buku tidak ditemukan/i)).toBeInTheDocument();
  });

  test('displays correct status labels', () => {
    render(
      <BookProvider value={{ filteredBooks: mockBooks }}>
        <BookList />
      </BookProvider>
    );

    expect(screen.getByText('Owned')).toBeInTheDocument();
    expect(screen.getByText('Reading')).toBeInTheDocument();
  });
});