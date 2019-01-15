import React from "react";

import Shelf from "./Shelf";

const BookShelf = props => {
  return <Shelf books={props.books}/>
};

export default BookShelf;
