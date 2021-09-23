import { useEffect, useState } from "react";
import classes from "./MovieCard.module.css";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
interface Page {
  curr: number;
  next: number;
  prev: number;
}
const MovieCard: React.FC = () => {
  const pageNum = useSelector((state: Page) => {
    return state;
  });
  const [moviePage, setmoviePage] = useState();

  useEffect(() => {
    const fetchHandler = async () => {
      const fetchTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=ea9489d6b33eaa42e9d8a22a4487815e&language=en-US&page=${pageNum.curr}`
      );
      const topRatedData = await fetchTopRated.json();
      setmoviePage(topRatedData.results);
    };
    fetchHandler();
  }, [pageNum]);

  return (
    <ul className={classes["movie-card"]}>
      {moviePage && <MovieItem topRated={moviePage} />}
    </ul>
  );
};
export default MovieCard;
