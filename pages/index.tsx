import MovieCard from "../components/MovieCard";
import MoviePagination from "../components/MoviePagination";
import React from "react";
import MovieSort from "../components/MovieSort";
const Home = () => {
  return (
    <div>
      <MovieSort />
      <MovieCard />
      <MoviePagination />
    </div>
  );
};

export default Home;
