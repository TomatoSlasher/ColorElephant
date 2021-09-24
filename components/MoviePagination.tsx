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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const prevPage = () => {
    dispatch(paginationActions.prevPage());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={classes["movie-pagination-container"]}>
      {pageNum.prev > 0 && (
        <button onClick={prevPage}>
          <span className={classes["pagination-btn"]}>Prev {pageNum.prev}</span>
        </button>
      )}
      <h3 className={classes["curr-page"]}>
        {" "}
        <span className={classes["pagination-btn"]}> {pageNum.curr}</span>
      </h3>
      {pageNum.next < 25 && (
        <button onClick={nextPage}>
          <span className={classes["pagination-btn"]}>
            {" "}
            Next {pageNum.next}{" "}
          </span>
        </button>
      )}
    </div>
  );
};
export default MoviePagination;
