import classes from "./MoviePagination.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { paginationActions } from "../store/index";
interface Page {
  curr: number;
  next: number;
  prev: number;
}
const MoviePagination: React.FC = () => {
  const pageNum = useSelector((state: Page) => {
    return state;
  });
  const dispatch = useDispatch();

  const nextPage = () => {
    dispatch(paginationActions.nextPage());
  };
  const prevPage = () => {
    dispatch(paginationActions.prevPage());
  };

  return (
    <div className={classes["movie-pagination-container"]}>
      {pageNum.prev > 0 && (
        <button onClick={prevPage}>Prev {pageNum.prev}</button>
      )}
      <h3 className={classes["curr-page"]}>{pageNum.curr}</h3>
      {pageNum.next < 25 && (
        <button onClick={nextPage}>Next {pageNum.next} </button>
      )}
    </div>
  );
};
export default MoviePagination;
