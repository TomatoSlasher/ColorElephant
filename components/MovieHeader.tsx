import classes from "./MovieHeader.module.css";
import MovieSort from "./MovieSort";

const MovieHeader = () => {
  return (
    <div className={classes["header-container"]}>
      <h2>Top Rated Movies</h2>
      <MovieSort />
    </div>
  );
};
export default MovieHeader;
