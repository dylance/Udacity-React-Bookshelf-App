import React from "react";
import { Link } from 'react-router-dom';

const SearchButton = () => {
  return (
    <div className="open-search">
      <Link className="search-button" to="/search">Search</Link>
    </div>
  );
};

export default SearchButton;
