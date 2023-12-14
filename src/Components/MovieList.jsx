import React, { useContext } from "react";
import { MovieContext } from "../App";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies);
  return movies.map((item) => {
    return <MovieCard key={item.id} {...item} />;
  });
};

export default MovieList;
