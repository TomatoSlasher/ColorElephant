import React from "react";
import MovieInfo from "./MovieInfo";
interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  id: number;
}
const MovieItem: React.FC<{ topRated: [] }> = (props: { topRated: [] }) => {
  return (
    <React.Fragment>
      {props.topRated.map((data: Movie) => (
        <MovieInfo key={data.id} data={data} />
      ))}
    </React.Fragment>
  );
};
export default MovieItem;
