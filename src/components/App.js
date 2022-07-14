import React, { useState } from "react";
import "../styles/app.css";
import Search from "../components/Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState ([])
  // searchResults.map((e) => console.log(e))


  return (
    <div className="app">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search setSearchResults={setSearchResults} />
      {/* Search component, passing in as a prop */}
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default App;
