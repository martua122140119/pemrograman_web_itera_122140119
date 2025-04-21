import { render, screen, fireEvent } from '@testing-library/react';
import { BookProvider } from '../../context/BookContext';
import BookForm from './BookForm';

describe('BookForm Component', () => {
  const mockAddBook = jest.fn();
  const mockEditBook = jest.fn();

  beforeEach(() => {
    mockAddBook.mockClear();
    mockEditBook.mockClear();
  });

  test('renders form fields', () => {
    render(
      <BookProvider value={{ addBook: mockAddBook }}>
        <BookForm />
      </BookProvider>
    );

    expect(screen.getByLabelText('Judul Buku')).toBeInTheDocument();
    expect(screen.getByLabelText('Author')).toBeInTheDocument();
    expect(screen.getByLabelText('Status')).toBeInTheDocument();
    expect(screen.getByText('Tambahkan Buku')).toBeInTheDocument();
  });

  test('validates required fields', async () => {
    render(
      <BookProvider value={{ addBook: mockAddBook }}>
        <BookForm />
      </BookProvider>
    );

    fireEvent.click(screen.getByText('Tambahkan Buku'));
    
    expect(await screen.findByText('Judul buku harus diisi')).toBeInTheDocument();
    expect(await screen.findByText('Author harus diisi')).toBeInTheDocument();
    expect(mockAddBook).not.toHaveBeenCalled();
  });

  test('submits valid form', () => {
    render(
      <BookProvider value={{ addBook: mockAddBook }}>
        <BookForm />
      </BookProvider>
    );

    fireEvent.change(screen.getByLabelText('Judul Buku'), { target: { value: 'New Book' } });
    fireEvent.change(screen.getByLabelText('Author'), { target: { value: 'Author' } });
    fireEvent.click(screen.getByText('Tambahkan Buku'));
    
    expect(mockAddBook).toHaveBeenCalledWith({
      id: '',
      title: 'New Book',
      author: 'Author',
      status: 'owned',
      notes: ''
    });
  });
});