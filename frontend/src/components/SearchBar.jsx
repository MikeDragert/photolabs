import React from 'react'

const SearchBar = function(props) {
  const handleChange = function (event) {
    props.onSearchChange(event.target.value);
  }

  return (
    <div className="top-nav-bar-search">
      <input type='text' id="searchBar" placeholder="Enter Search..."  onChange={handleChange} value={props.state.searchString}></input>
    </div>
  );
}

export default SearchBar;