import React from 'react';

import Book from './Book'

const Shelf = props => {
  return (
    <div>
      {props.books.map(book => {
        return <Book key={book.id} book={book} />
      })}
    </div>
  )
}
export default Shelf;
