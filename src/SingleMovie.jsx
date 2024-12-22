import React from "react";
import { useParams } from "react-router-dom";

function SingleMovie({ movies }) {
  const { id } = useParams();
  const movie = movies.find((elt) => elt.id === id);
  console.log(movie);

  return (
    <div id="singlepage">
      <div>
        <h1> {movie.title} </h1>
      </div>
      <img src="https://www.hogwartslegacy.com/images/share.jpg" alt="" />
      <h1> {movie.posterURL} </h1>
      <p> {movie.description} </p>
    </div>
  );
}

export default SingleMovie;
