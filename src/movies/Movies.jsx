import React from "react";
import Navbar from "../navbar/Navbar";
import MovieList from "../movieList/MovieList";

function Movies({ setSearch, setRate, setMovies, search, rate, movies }) {
  return (
    <div id="moviepage">
      <Navbar setSearch={setSearch} setRate={setRate} />
      <MovieList
        setMovies={setMovies}
        search={search}
        rate={rate}
        movies={movies}
      />
    </div>
  );
}

export default Movies;
