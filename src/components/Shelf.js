import React from 'react';

import Book from './Book'

const Shelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books instanceof Array && props.books.map(book => {
            return <Book key={book.id} book={book} changeShelf={props.changeShelf}/>
          })}
        </ol>
      </div>
    </div>
  )
}
export default Shelf;
