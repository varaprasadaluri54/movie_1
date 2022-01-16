import React from "react";
import Movie from "./components/Movie";
import "./styles.css";

const FEATURE_API =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";

const IMG_API =
  "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher";
function App() {
  const movies = ["1", "2", "3"];

  return (
    <div>
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
}
export default App;
