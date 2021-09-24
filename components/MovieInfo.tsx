import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./MovieItem.module.css";

interface Movie {
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  id: number;
}
const MovieInfo = (props: { data: Movie }) => {
  const [isFav, setIsFav] = useState(false);
  const secCirc = useRef<any>(null);
  useEffect(() => {
    secCirc.current.style.strokeDashoffset = `calc(186 - (186 * ${
      props.data.vote_average * 10
    }) / 100`;
  }, [secCirc]);
  const addFavs = (id: number) => {
    let favsList = JSON.parse(localStorage.getItem("Favs") || "[]");
    if (!favsList.includes(props.data.id)) {
      if (favsList == null) favsList = [];
      favsList.push(id);
      localStorage.setItem("Favs", JSON.stringify(favsList));
    }
  };

  const removeFavs = () => {
    let currFavList = JSON.parse(localStorage.getItem("Favs") || "[]");
    const indexId = currFavList.indexOf(props.data.id);
    currFavList.splice(indexId, 1);
    localStorage.setItem("Favs", JSON.stringify(currFavList));
  };
  let favsList = JSON.parse(localStorage.getItem("Favs") || "[]");

  useEffect(() => {
    const hasId = favsList.includes(props.data.id);
    setIsFav(hasId);
  }, []);
  return (
    <Fragment>
      <li
        value={props.data.id}
        key={props.data.id}
        className={`${classes["movie-item-container"]} ${
          isFav ? classes.fav : ""
        }`}
      >
        <img
          className={classes["movie-item-poster"]}
          src={`https://image.tmdb.org/t/p/w200/${props.data.poster_path}`}
          alt="movie-poster"
        />
        <div className={classes["movie-content-container"]}>
          <div className={classes["movie-title-container"]}>
            <h4 className={classes["movie-item-title"]}>{props.data.title}</h4>
            {isFav ? (
              <svg
                width="30"
                height="30"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className={classes["active-star-icon"]}
                onClick={() => {
                  removeFavs();
                  setIsFav(false);
                }}
              >
                <path
                  fill="yellow"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className={classes["star-icon"]}
                onClick={() => {
                  addFavs(props.data.id);
                  setIsFav(true);
                }}
              >
                <path
                  className={classes["star-path"]}
                  fill="currentColor"
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                ></path>
              </svg>
            )}
          </div>
          <h4 className={classes["movie-item-date"]}>
            {props.data.release_date.slice(0, 4)}
          </h4>
          <a href={`https://www.themoviedb.org/movie/${props.data.id}`}>
            <div className={classes["view-on-container"]}>
              <button className={classes["view-on"]}>View on TMDB</button>
            </div>
          </a>
          <div className="circ-container">
            <div className="box">
              <div className="rating-circle">
                <div className="whole-circ">
                  <svg className="outer-circ">
                    <circle className="circ" cx="22" cy="22" r="37"></circle>
                  </svg>

                  <div className="percent">
                    <svg>
                      <circle cx="30" cy="30" r="30"></circle>
                      <linearGradient
                        id="linearColors"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#90cea1"></stop>
                        <stop offset="100%" stopColor="#01b4e4"></stop>
                      </linearGradient>
                      <circle
                        ref={secCirc}
                        id="sec-circ"
                        cx="30"
                        cy="30"
                        r="30"
                        stroke-width="4"
                        stroke="url(#linearColors)"
                      ></circle>
                    </svg>
                    <div className="num">
                      <h2 className="show-rating">
                        {props.data.vote_average * 10}%
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
};
export default MovieInfo;
