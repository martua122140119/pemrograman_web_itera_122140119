import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BookProvider } from '../../context/BookContext';

describe('Home Component', () => {
  test('renders all main sections', () => {
    render(
      <BookProvider>
        <Home />
      </BookProvider>
    );

    expect(screen.getByText('Personal Book Manager')).toBeInTheDocument();
    expect(screen.getByText('Untuk mengelola buku pribadi saya')).toBeInTheDocument();
    expect(screen.getByText('Buku Saya')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mencari Buku....')).toBeInTheDocument();
  });

  test('contains all main components', () => {
    render(
      <BookProvider>
        <Home />
      </BookProvider>
    );

    expect(screen.getByTestId('book-form')).toBeInTheDocument();
    expect(screen.getByTestId('book-filter')).toBeInTheDocument();
    expect(screen.getByTestId('book-list')).toBeInTheDocument();
  });
});