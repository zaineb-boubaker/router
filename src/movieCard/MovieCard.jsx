import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function MovieCard({title,description ,rating ,posterURL,id} ) {
  return (
    <div id="card">
      <Link to={`/movies/${id}`}> <img id="imgcard" src={posterURL} alt="" /></Link>
      <div id="card2">
        <h2 id="title">{title}</h2>
        <p id="description">{description}</p>
        <div>
          <p id="star">{"⭐".repeat(rating)}</p>
        </div>
      </div>
    </div>
  );
}



// MovieCard.propTypes = {
//   title: PropTypes.string, 
//   description: PropTypes.string, 
//   posterURL: PropTypes.string, 
//   rating: PropTypes.number, 
// };

MovieCard.defaultProps = {
  title: "Unknown Title",
  description: "No description available.",
  posterURL: "./images/default.jpg", 
  rating: 0, 
};





export default MovieCard;
  {/* <img src="./images/star (1).png" id="rate" alt="" /> */}