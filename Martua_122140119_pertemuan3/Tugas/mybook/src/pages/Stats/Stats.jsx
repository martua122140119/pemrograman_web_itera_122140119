import React from 'react';
import { Link } from 'react-router-dom';
import useBookStats from '../../hooks/useBookStats';
import './Stats.css';

const Stats = () => {
  const stats = useBookStats();
  
  return (
    <div className="stats-container">
      <section className="stats-header">
        <h1>Statistik Koleksi Buku</h1>
        <Link to="/" className="back-button">Kembali ke Book Manager</Link>
      </section>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Buku</h3>
          <div className="stat-value">{stats.totalBooks}</div>
        </div>
        
        <div className="stat-card">
          <h3>Buku Dipunyai</h3>
          <div className="stat-value">{stats.ownedBooks}</div>
          <div className="stat-percentage">
            {stats.totalBooks ? Math.round((stats.ownedBooks / stats.totalBooks) * 100) : 0}% dari koleksi
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Sedang Dibaca</h3>
          <div className="stat-value">{stats.readingBooks}</div>
          <div className="stat-percentage">
            {stats.totalBooks ? Math.round((stats.readingBooks / stats.totalBooks) * 100) : 0}% dari koleksi
          </div>
        </div>
        
        <div className="stat-card">
          <h3>Buku Akan Dibeli</h3>
          <div className="stat-value">{stats.toBuyBooks}</div>
          <div className="stat-percentage">
            {stats.totalBooks ? Math.round((stats.toBuyBooks / stats.totalBooks) * 100) : 0}% dari koleksi
          </div>
        </div>
      </div>
      
      {stats.topAuthor && (
        <div className="author-stats">
          <h3>Penulis Paling Umum</h3>
          <p>
            <span className="top-author">{stats.topAuthor}</span> with 
            <span className="author-count"> {stats.authorBookCount} </span> 
            {stats.authorBookCount === 1 ? 'book' : 'books'}
          </p>
        </div>
      )}
      
      {stats.recentlyAdded.length > 0 && (
        <div className="recent-books">
          <h3>Buku yang Baru Ditambahkan</h3>
          <ul className="recent-list">
            {stats.recentlyAdded.map(book => (
              <li key={book.id} className="recent-item">
                <span className="recent-title">{book.title}</span>
                <span className="recent-author">by {book.author}</span>
                <span className={`recent-status status-${book.status}`}>
                  {book.status === 'owned' ? 'Owned' : 
                   book.status === 'reading' ? 'Reading' : 'To Buy'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Stats;