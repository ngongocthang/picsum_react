import React from 'react';

import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
  const renderedBooks = books.map((book) => { // tạo mảng chứa mới
    return ( // mỗi cuốn sách trong books được tạo thành từ 1 bookShow
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });

  return <div className='book-list'>{renderedBooks}</div>;
};

export default BookList;
