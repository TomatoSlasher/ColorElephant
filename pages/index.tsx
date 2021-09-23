import MoviePagination from "../components/MoviePagination";
import React from "react";
import MovieSort from "../components/MovieSort";
import dynamic from "next/dynamic";
const MovieCard = dynamic(() => import("../components/MovieCard"), {
  ssr: false,
});
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
