import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BookCreate from './conponent/BookCreate';
import BookList from './conponent/BookList';

import "./style.css"
import "./index.css"

const App = () => {
  const [books, setBooks] = useState([]);


  // gửi yêu cầu get để lấy danh sách các cuốn sách
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  // gọi hàm fetchBooks để lấy danh sách các cuốn sách khi component render lần đầu
  useEffect(() => {
    fetchBooks();
  }, []); // fetchBooks chỉ dc goị 1 lần do mảng trống

  return (
    <div>
        <h1 id='title_app'>Reading List</h1>
        <BookList books={books} onDelete={fetchBooks} onEdit={fetchBooks} />
      <BookCreate onCreate={fetchBooks} />
    </div>
  );
};

export default App;
