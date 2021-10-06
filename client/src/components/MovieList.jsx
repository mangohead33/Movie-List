import React from 'react';

const MovieList = ({ movies, availableMovies }) => {
  const titles = movies.map((movie) => {
    const { title } = movie;
    return (<div key={title}>{title}</div>);
  });
  if (availableMovies.length) {
    const availableTitles = availableMovies.map((movie) => <div key={movie}>{movie}</div>);
    return availableTitles;
  }
  return titles;
};
export default MovieList;
