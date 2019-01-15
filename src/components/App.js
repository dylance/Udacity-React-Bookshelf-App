import React, { Component } from "react";
import '../App.css'
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
    return (
      <div className="app">
        <BookShelf
          books={this.state.books}
        />
      </div>
    )
  }
}

export default App;
