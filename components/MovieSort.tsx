import { useDispatch } from "react-redux";
import { paginationActions } from "../store/index";
import classes from "./MovieSort.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const MovieSort = () => {
  const pageState = useSelector((state: { sort: boolean }) => {
    return state;
  });
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dispatch = useDispatch();
  const sortAsc = () => {
    dispatch(paginationActions.sortAsc());
    dispatch(paginationActions.restPage());
    setDropDownOpen(false);
  };
  const sortDes = () => {
    dispatch(paginationActions.sortDes());
    dispatch(paginationActions.restPage());
    setDropDownOpen(false);
  };
  return (
    <div className={classes["sort-container"]}>
      <button
        className={classes["curr-sort"]}
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <span>{pageState.sort ? "Rating Descending" : "Rating Ascending"}</span>
        <svg
          width="20"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      {dropDownOpen && (
        <div className={classes["dropdown-container"]}>
          <button className={classes["sort-btn"]} onClick={sortDes}>
            Sort Rating Descending
          </button>
          <button className={classes["sort-btn"]} onClick={sortAsc}>
            Sort Rating Ascending
          </button>
        </div>
      )}
    </div>
  );
};
export default MovieSort;
