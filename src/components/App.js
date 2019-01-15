import React, { Component } from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";

import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";

class App extends Component {
  state = {
    books: []
  };

  changeShelf = book => {
    let booksCopy = this.state.books.slice();
    let index = booksCopy.findIndex(bk => bk.id === book.id);

    booksCopy[index] = book;

    this.setState({
      books: booksCopy
    });
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
        <BookShelf books={this.state.books} changeShelf={this.changeShelf} />
        <SearchButton />
      </div>
    );
  }
}

export default App;
