import React, { Component } from "react";
import "../App.css";
import * as BooksAPI from "../BooksAPI";
import { Route } from "react-router-dom";

import BookShelf from "./BookShelf";
import SearchButton from "./SearchButton";
import Search from "./Search";

class App extends Component {
  state = {
    books: []
  };

  changeShelf = book => {
    let booksCopy = this.state.books.slice();
    let index = booksCopy.findIndex(bk => bk.id === book.id);

    if (index > 0) {
      booksCopy[index] = book;
    } else {
      BooksAPI.update(book, book.shelf)
      booksCopy.push(book);
    }

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
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <SearchButton />
        <Route
          path="/search"
          render={() => <Search changeShelf={this.changeShelf} />}
        />
      </div>
    );
  }
}

export default App;
