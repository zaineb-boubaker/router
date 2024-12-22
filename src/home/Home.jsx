import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

{
  /* <Link to="/movies">movies</Link> */
}

function Home() {
  return (
    <div id="home">
      <div id="box">
        <h1>HARRY POTTER</h1>
      </div>
      <div id="line"></div>
      <Link to="/movies">
        {" "}
        <div id="but">
          <h3>CAST THE SPELL</h3>
        </div>
      </Link>
    </div>
  );
}

export default Home;
