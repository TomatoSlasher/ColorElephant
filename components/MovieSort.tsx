import { useDispatch } from "react-redux";
import { paginationActions } from "../store/index";

const MovieSort = () => {
  const dispatch = useDispatch();
  const sortAsc = () => {
    dispatch(paginationActions.sortAsc());
    dispatch(paginationActions.restPage());
  };
  const sortDes = () => {
    dispatch(paginationActions.sortDes());
    dispatch(paginationActions.restPage());
  };
  return (
    <div>
      <button onClick={sortAsc}>Sort Ascending</button>
      <button onClick={sortDes}>Sort Descending</button>
    </div>
  );
};
export default MovieSort;
