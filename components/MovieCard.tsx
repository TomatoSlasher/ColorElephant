import classes from "./MovieCard.module.css";
import MovieItem from "./MovieItem";

const MovieCard = (props: { topRated: [] }) => {
  return (
    <ul className={classes["movie-card"]}>
      <MovieItem topRated={props.topRated} />
    </ul>
  );
};
export default MovieCard;
