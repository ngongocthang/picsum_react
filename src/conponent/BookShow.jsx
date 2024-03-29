import React, { useState } from 'react';
import axios from 'axios';
import "./style_element.css";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false); 
  const [newTitle, setNewTitle] = useState(book.title);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3001/books/${book.id}`, {
        title: newTitle,
      });
      setShowEdit(false);
      onEdit();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/books/${book.id}`);
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = (
      <div>
        <input
        className='input_bookShow'
          type='text'
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
      </div>
    );
  }
  const randomImageUrl = `https://picsum.photos/seed/${book.id}/300/200`;

  return (

<div className="flex float-left">
  <div className="element ml-5">
        <div className='actions'>
        <button className='edit' onClick={handleEdit}>
        <FaRegEdit />
        </button>
        <button className='delete' onClick={handleDelete}>
        <FaRegTrashAlt />
        </button>
        </div>
      <img src={randomImageUrl} alt={book.title} />
      <div className='title_element'>{content}</div>
      </div>

</div>
  );
};

export default BookShow;
