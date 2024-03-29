import React, { useState } from 'react';
import axios from 'axios';

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/books', {
        title: title,
      });
      onCreate();
      setTitle('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container_create '>
      <div>      
        <strong className='strong'> Add a Book</strong>
      </div>
      <span className='title_mini'>Title</span>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
