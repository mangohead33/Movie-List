/* eslint-disable react/prop-types */
import React from 'react';
// import React, { useState, useEffect } from 'react';

const Search = ({
  movies, searchInput, handleChange, handleSearch,
}) => {
  const temp = 10;
  return (
    <form>
      <input
        type="text"
        name="movieSearch"
        placeholder="search..."
        value={searchInput}
        onChange={handleChange}
      />
      <button type="button" onClick={handleSearch}>Go!</button>
    </form>
  );
};
export default Search;
