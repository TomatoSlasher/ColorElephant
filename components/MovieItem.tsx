import React from "react";
import classes from "./MovieItem.module.css";
interface Movie {
  title: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
}
const MovieItem: React.FC<{ topRated: [] }> = (props: { topRated: [] }) => {
  return (
    <React.Fragment>
      {props.topRated.map((data: Movie) => (
        <li className={classes["movie-item-container"]}>
          <img
            className={classes["movie-item-poster"]}
            src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
            alt="movie-poster"
          />
          <h4 className={classes["movie-item-title"]}>{data.title}</h4>
          <h4 className={classes["movie-item-date"]}>
            {data.release_date.slice(0, 4)}
          </h4>
          <h4 className={classes["movie-item-rating"]}>
            {data.vote_average}/10
          </h4>
        </li>
      ))}
    </React.Fragment>
  );
};
export default MovieItem;
