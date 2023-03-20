import React from "react";
import { getMovieList } from "../api";
import { useEffect, useState } from "react";

const PopularMovieList = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setpopularMovies(result);
    });
  }, []);

  return popularMovies.map((movie, i) => {
    return (
      <div>
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title"> {movie.title}</div>
          <img src={`${"https://image.tmdb.org/t/p"}/${"w300"}${movie.poster_path}`} />
          <div className="Movie-date"> {movie.release_date}</div>
          <div className="Movie-rate"> {movie.vote_average}</div>
        </div>
      </div>
    );
  });
};

export default PopularMovieList;
