import React, { useState } from 'react'
import MovieCard from '../movieCard/MovieCard'
import "./style.css";
import Add from '../dialog/Add';



function MovieList({ search, rate, movies, setMovies }) {
  // console.log(search);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="list">
      {movies
        .filter((elt) =>
          elt.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .filter((elt) => (rate ? elt.rating == rate : elt))
        .map((movie, i) => (
          <MovieCard key={i} {...movie} />
        ))}
      <button onClick={handleClickOpen} id="add">
        Add New Movie
      </button>
      <Add movies={movies} setMovies={setMovies} open={open} handleClose={handleClose} />
    </div>
  );
}

export default MovieList