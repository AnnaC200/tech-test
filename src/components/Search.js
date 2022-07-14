import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({setSearchResults}) => {
  const[value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
  // this will stop our app re-rendering on submit.
    setSearchResults(await getImages(value));
  };

  return(
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-input"
          type="text" 
          onChange={(event) => setValue(event.target.value)}
          //onChange (EVENT HANDLER) etc will save the users search query everytime there's a change within input
        />
        <button className="search-button" type="submit">
            Go!
        </button>
      </form> 
    </>
  )
}

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired
};
