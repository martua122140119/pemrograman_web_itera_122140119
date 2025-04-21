import React from 'react';
import BookForm from '../../component/BookForm/BookForm';
import BookFilter from '../../component/BookFilter/BookFilter';
import BookList from '../../component/BookList/BookList';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-header">
        <h1>Personal Book Manager</h1>
        <p>Untuk mengelola buku pribadi saya</p>
      </section>
      
      <section className="add-book-section">
        <BookForm />
      </section>
      
      <section className="book-management-section">
        <h2>Buku Saya</h2>
        <BookFilter />
        <BookList />
      </section>
    </div>
  );
};

export default Home;