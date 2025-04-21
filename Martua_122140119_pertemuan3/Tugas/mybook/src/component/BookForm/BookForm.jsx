import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../../context/BookContext';
import PropTypes from 'prop-types';
import './BookForm.css';

const BookForm = ({ bookToEdit, onCancelEdit }) => {
  const { addBook, editBook } = useContext(BookContext);
  const [formError, setFormError] = useState({});
  
  const initialFormState = {
    id: '',
    title: '',
    author: '',
    status: 'owned',
    notes: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);
  
  // If bookToEdit is provided, populate form with book data
  useEffect(() => {
    if (bookToEdit) {
      setFormData(bookToEdit);
    } else {
      setFormData(initialFormState);
    }
  }, [bookToEdit]);
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Judul buku harus diisi';
    }
    
    if (!formData.author.trim()) {
      errors.author = 'Author harus diisi';
    }
    
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formError[name]) {
      setFormError({
        ...formError,
        [name]: ''
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (bookToEdit) {
        editBook(formData);
        if (onCancelEdit) onCancelEdit();
      } else {
        addBook(formData);
        setFormData(initialFormState);
      }
    }
  };
  
  const handleCancel = () => {
    if (onCancelEdit) {
      onCancelEdit();
    } else {
      setFormData(initialFormState);
    }
    setFormError({});
  };
  
  return (
    <div className="book-form-container">
      <h2>{bookToEdit ? 'Edit Book' : 'Add New Book'}</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="title">Judul Buku</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={formError.title ? 'error' : ''}
          />
          {formError.title && <p className="error-message">{formError.title}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={formError.author ? 'error' : ''}
          />
          {formError.author && <p className="error-message">{formError.author}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={formError.status ? 'error' : ''}
          >
            <option value="owned">Dipunyai</option>
            <option value="reading">Sedang Dibaca</option>
            <option value="tobuy">Akan Dibeli</option>
          </select>
          {formError.status && <p className="error-message">{formError.status}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="notes">Catatan (optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes || ''}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            {bookToEdit ? 'Update Buku' : 'Tambahkan Buku'}
          </button>
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Batalkan
          </button>
        </div>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  bookToEdit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    notes: PropTypes.string
  }),
  onCancelEdit: PropTypes.func
};

export default BookForm;