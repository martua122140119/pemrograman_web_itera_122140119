import React, { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
// Define initial state
const initialState = {
  books: [],
  filteredBooks: [],
  filter: 'all',
  searchTerm: '',
};

// Create the context
export const BookContext = createContext(initialState);

// Define actions
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const SET_FILTER = 'SET_FILTER';
const SET_SEARCH = 'SET_SEARCH';
const LOAD_BOOKS = 'LOAD_BOOKS';

// Create reducer function
const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBooks = [...state.books, action.payload];
      return {
        ...state,
        books: newBooks,
        filteredBooks: filterAndSearchBooks(
          newBooks, 
          state.filter, 
          state.searchTerm
        ),
      };
    
    case DELETE_BOOK:
      const remainingBooks = state.books.filter(book => book.id !== action.payload);
      return {
        ...state,
        books: remainingBooks,
        filteredBooks: filterAndSearchBooks(
          remainingBooks, 
          state.filter, 
          state.searchTerm
        ),
      };
    
    case EDIT_BOOK:
      const updatedBooks = state.books.map(book => 
        book.id === action.payload.id ? action.payload : book
      );
      return {
        ...state,
        books: updatedBooks,
        filteredBooks: filterAndSearchBooks(
          updatedBooks, 
          state.filter, 
          state.searchTerm
        ),
      };
    
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
        filteredBooks: filterAndSearchBooks(
          state.books, 
          action.payload, 
          state.searchTerm
        ),
      };
    
    case SET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
        filteredBooks: filterAndSearchBooks(
          state.books, 
          state.filter, 
          action.payload
        ),
      };
    
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
        filteredBooks: filterAndSearchBooks(
          action.payload, 
          state.filter, 
          state.searchTerm
        ),
      };
      
    default:
      return state;
  }
};

// Helper function to filter and search books
const filterAndSearchBooks = (books, filter, searchTerm) => {
  return books
    .filter(book => filter === 'all' || book.status === filter)
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Create provider component
export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  // Load books from localStorage on initial render
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      dispatch({ 
        type: LOAD_BOOKS, 
        payload: JSON.parse(storedBooks) 
      });
    }
  }, []);

  // Save books to localStorage whenever books change
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(state.books));
  }, [state.books]);

  // Action creators
  const addBook = (book) => {
    dispatch({
      type: ADD_BOOK,
      payload: { ...book, id: Date.now().toString() }
    });
  };

  const deleteBook = (id) => {
    dispatch({
      type: DELETE_BOOK,
      payload: id
    });
  };

  const editBook = (book) => {
    dispatch({
      type: EDIT_BOOK,
      payload: book
    });
  };

  const setFilter = (filter) => {
    dispatch({
      type: SET_FILTER,
      payload: filter
    });
  };

  const setSearchTerm = (term) => {
    dispatch({
      type: SET_SEARCH,
      payload: term
    });
  };

  return (
    <BookContext.Provider value={{
      books: state.books,
      filteredBooks: state.filteredBooks,
      filter: state.filter,
      searchTerm: state.searchTerm,
      addBook,
      deleteBook,
      editBook,
      setFilter,
      setSearchTerm
    }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired
};