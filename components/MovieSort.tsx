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
        {pageState.sort ? "Rating Descending" : "Rating Ascending"}
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
