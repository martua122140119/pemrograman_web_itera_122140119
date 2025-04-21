import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import './BookFilter.css';

const BookFilter = () => {
  const { filter, setFilter, searchTerm, setSearchTerm } = useContext(BookContext);
  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="book-filter">
      <div className="search-container">
        <input
          type="text"
          placeholder="Mencari Buku...."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <div className="filter-options">
        <label>Filter status:</label>
        <div className="filter-buttons">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Semua
          </button>
          <button 
            className={filter === 'owned' ? 'active' : ''} 
            onClick={() => setFilter('owned')}
          >
            Dipunyai
          </button>
          <button 
            className={filter === 'reading' ? 'active' : ''} 
            onClick={() => setFilter('reading')}
          >
            Sedang Dibaca
          </button>
          <button 
            className={filter === 'tobuy' ? 'active' : ''} 
            onClick={() => setFilter('tobuy')}
          >
            Akan Dibeli
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFilter;