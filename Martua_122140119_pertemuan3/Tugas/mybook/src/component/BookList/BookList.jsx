import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookForm from '../BookForm/BookForm';
import './BookList.css';

const BookList = () => {
  const { filteredBooks, deleteBook } = useContext(BookContext);
  const [editingBook, setEditingBook] = useState(null);
  
  const handleEdit = (book) => {
    setEditingBook(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDelete = (id) => {
    if (window.confirm('Kamu yakin menghapus buku ini?')) {
      deleteBook(id);
    }
  };
  
  const handleCancelEdit = () => {
    setEditingBook(null);
  };
  
  const getStatusLabel = (status) => {
    switch (status) {
      case 'owned':
        return { label: 'Owned', className: 'status-owned' };
      case 'reading':
        return { label: 'Reading', className: 'status-reading' };
      case 'tobuy':
        return { label: 'To Buy', className: 'status-tobuy' };
      default:
        return { label: status, className: '' };
    }
  };
  
  return (
    <div className="book-list-container">
      {editingBook && (
        <div className="edit-form-container">
          <BookForm bookToEdit={editingBook} onCancelEdit={handleCancelEdit} />
        </div>
      )}
      
      {filteredBooks.length === 0 ? (
        <div className="no-books">
          <p>Buku tidak ditemukan, coba sesuaikan pencarian atau tambahkan buku baru!</p>
        </div>
      ) : (
        <div className="book-list">
          {filteredBooks.map(book => {
            const { label, className } = getStatusLabel(book.status);
            
            return (
              <div key={book.id} className="book-item">
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <span className={`book-status ${className}`}>{label}</span>
                  {book.notes && <p className="book-notes">{book.notes}</p>}
                </div>
                
                <div className="book-actions">
                  <button 
                    className="btn-edit"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookList;