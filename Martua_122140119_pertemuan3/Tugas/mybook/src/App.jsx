import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import './App.css';

function App() {
  return (
    <BookProvider>
      <Router>
        <div className="app">
          <nav className="app-nav">
            <div className="app-logo">
              <Link to="/">Book Manager</Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stats">Statistics</Link>
              </li>
            </ul>
          </nav>
          
          <main className="app-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
          
          <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} Martua Book Manager. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </BookProvider>
  );
}

export default App;