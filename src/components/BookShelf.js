import React from "react";

import Shelf from "./Shelf";

const BookShelf = props => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <Shelf books={props.books}/>
        </div>
      </div>
    </div>    
  )
};

export default BookShelf;
