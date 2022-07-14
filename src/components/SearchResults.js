import React from "react";
import PropTypes from "prop-types";
import "../styles/searchResults.css";

const SearchResults = ({ searchResults }) => {
  console.log(searchResults, "<-- results in search results")
  if (!searchResults.length) {
    return <p className="no-results">No results</p>
  } else {
    return (
      <>
        {searchResults.map((image) => {
          console.log(image, "<-- image")
          return <img className="search-results" src={image} alt="spaceImage" />
        })}
      </>
    );
  }
}

export default SearchResults;

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired
}
