import React, { Component } from "react";
import * as BooksAPI from "../util/BooksAPI";
import { Link } from "react-router-dom";

import Shelf from "./Shelf";

class Search extends Component {
  state = {
    searchValue: "",
    searchResults: []
  };

  onChange = event => {
    const { value } = event.target;

    this.setState({
      searchValue: value
    });

    if (value) {
      BooksAPI.search(value).then(results => {
        this.setState({
          searchResults: results
        });
      });
    } else {
      this.setState({
        searchResults: []
      });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchValue}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelf
            books={this.state.searchResults}
            shelf="Search Results"
            changeShelf={this.props.changeShelf}
            usersBooks={this.props.books}
          />

          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default Search;
