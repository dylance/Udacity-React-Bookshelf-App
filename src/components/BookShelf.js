import React from "react";

import Shelf from "./Shelf";

const BookShelf = props => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <Shelf
            shelf="Currently Reading"
            books={props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
            changeShelf={props.changeShelf}
          />
          <Shelf
            shelf="Want to Read"
            books={props.books.filter(book => book.shelf === "wantToRead")}
            changeShelf={props.changeShelf}
          />
          <Shelf
            shelf="Read"
            books={props.books.filter(book => book.shelf === "read")}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
