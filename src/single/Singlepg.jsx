import React from "react";
import { Link, useParams } from "react-router-dom";

function Singlepg({ movies }) {
  const { id } = useParams();
  const movie = movies.find((elt) => elt.id === id);
  console.log(movie);

    return (
       <div id="bodsinglepage">
        <div id="singlepage">
          
      <div id="test">
        <img src={movie.posterURL} alt="" />
      </div>
      <div id="desc">
        <h1> {movie.title} </h1>
        <p> {movie.description} </p>
        <p id="star">{"⭐".repeat(movie.rating)}</p>
      </div>
      <Link to="/movies">
        {" "}
        <img id="back" src="/images/back (3).png" alt="" />
      </Link>
            </div>
        </div>
  );
}

export default Singlepg;
