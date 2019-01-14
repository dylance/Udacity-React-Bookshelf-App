import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";

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
    return <div>hey there</div>;
  }
}

export default App;
