import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

import BookShelf from './BookShelf';

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  render() {
    return <BookShelf />;
  }
}

export default App;
