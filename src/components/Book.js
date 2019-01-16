import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
  book: PropTypes.object.isRequired,
  usersBooks: PropTypes.array,
  changeShelf: PropTypes.func.isRequired
};

  onChange = event => {
    let bookCopy = { ...this.props.book };
    bookCopy.shelf = event.target.value;

    this.props.changeShelf(bookCopy);
  };

  render() {
    let book = { ...this.props.book };

    if (this.props.usersBooks) {
      this.props.usersBooks.forEach(userBook => {
        if (userBook.id === book.id) {
          book.shelf = userBook.shelf;
        }
      });
    }
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  book.imageLinks && `url(${book.imageLinks.thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select onChange={this.onChange} value={book.shelf || "none"}>
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            <ul>
              {book.authors && book.authors.map(author => <li key={author}>- {author}</li>)}
            </ul>
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
