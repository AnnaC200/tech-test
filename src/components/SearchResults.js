import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>
  } else {
    return (
      <div className="search-results">
        <img src="space-image" />
      </div>
    );
  }
}

export default SearchResults;
