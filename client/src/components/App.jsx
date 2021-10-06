/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ],
      searchInput: '',
      availableMovies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState(
      { searchInput: event.target.value },
    );
  }

  handleSearch(event) {
    const { searchInput, movies } = this.state;
    // now i want you to extract the movie titles, and store them in an array
    // then search through each title and see if it matches with search input
    // i suggest you lower case both search and title for better match results
    const searchResults = [];
    const lowerCaseSearch = searchInput.toLowerCase();
    for (const movie of movies) {
      const movieLowerCase = movie.title.toLowerCase();
      const found = movieLowerCase.indexOf(lowerCaseSearch);
      if (!(found === -1)) {
        searchResults.push(movie.title);
      }
    }
    this.setState({
      searchInput: '',
      availableMovies: searchResults,
    });
    if (!searchResults.length) {
      alert('Sorry no mathcing titles found.');
    }
    event.preventDefault();
  }

  render() {
    const { movies, searchInput, availableMovies } = this.state;
    return (
      <div className="homepage">
        <h1 className="banner">Movie List</h1>
        <Search
          searchInput={searchInput}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
        />
        <MovieList movies={movies} availableMovies={availableMovies} />
      </div>
    );
  }
}

export default App;
