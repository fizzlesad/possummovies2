import "./GenreView.css";
import { useState, useEffect } from "react";
import axios from "axios";

function GenreView() {
  const [done, setDone] = useState(false);
  const [movieArray, setMovieArray] = useState([]);
  const [movie, setMovie] = useState({});

  async function movieData() {
    const options = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=2504360aa5c1db5862cf6d7813be21b2")
    setMovieArray(options.data.results);
    setMovie(movieArray);
    setDone(true);
  };

  return (
    <>
      {movieArray.map((movies) => (
        <a key={movie.id} href={`/movies/genre/${movies.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt=""
          />
        </a>
      ))}
      <div className="test"></div>
    </>
  );
}

export default GenreView;
