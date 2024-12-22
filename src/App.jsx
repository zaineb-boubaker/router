import { useState } from "react";
import "./App.css";
import data from "./data";
import Movies from "./movies/Movies";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import PageNotFound from "./pageNotFound/PageNotFound";
import LoginPage from "./loginPage/LoginPage";
import RegisterPage from "./registerPage/RegisterPage";
import SingleMovie from "./SingleMovie";
import Singlepg from "./single/Singlepg";

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("");
  const [movies, setMovies] = useState(data);

  return (
    <div>
      <Routes>
        <Route
          path="/movies"
          element={
            <Movies
              setMovies={setMovies}
              search={search}
              rate={rate}
              movies={movies}
              setSearch={setSearch}
              setRate={setRate}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movies/:id" element={<Singlepg movies={movies} />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      {/* <Navbar setSearch={setSearch} setRate={setRate} />
      <MovieList
        setMovies={setMovies}
        search={search}
        rate={rate}
        movies={movies}
      /> */}
    </div>
  );
}

export default App;
