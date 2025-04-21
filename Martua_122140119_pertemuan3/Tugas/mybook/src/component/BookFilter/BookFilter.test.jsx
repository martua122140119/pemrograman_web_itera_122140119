import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../../context/BookContext';
import BookFilter from './BookFilter';

describe('BookFilter Component', () => {
  test('renders search input and filter buttons', () => {
    render(
      <BookProvider>
        <BookFilter />
      </BookProvider>
    );

    expect(screen.getByPlaceholderText('Mencari Buku....')).toBeInTheDocument();
    expect(screen.getByText('Semua')).toBeInTheDocument();
    expect(screen.getByText('Dipunyai')).toBeInTheDocument();
    expect(screen.getByText('Sedang Dibaca')).toBeInTheDocument();
    expect(screen.getByText('Akan Dibeli')).toBeInTheDocument();
  });

  test('updates search term when typing', () => {
    const mockContext = {
      searchTerm: '',
      setSearchTerm: jest.fn()
    };

    render(
      <BookProvider value={mockContext}>
        <BookFilter />
      </BookProvider>
    );

    const searchInput = screen.getByPlaceholderText('Mencari Buku....');
    fireEvent.change(searchInput, { target: { value: 'react' } });
    
    expect(mockContext.setSearchTerm).toHaveBeenCalledWith('react');
  });

  test('changes filter when button clicked', () => {
    const mockContext = {
      filter: 'all',
      setFilter: jest.fn()
    };

    render(
      <BookProvider value={mockContext}>
        <BookFilter />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Dipunyai'));
    expect(mockContext.setFilter).toHaveBeenCalledWith('owned');
  });
});