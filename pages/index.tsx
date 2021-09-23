import MovieCard from "../components/MovieCard";
const Home = (props: { topRated: { results: [] } }) => {
  return (
    <div>
      <MovieCard topRated={props.topRated.results} />
    </div>
  );
};
export async function getServerSideProps() {
  const fetchTopRated = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ea9489d6b33eaa42e9d8a22a4487815e&language=en-US&page=2`
  );

  const topRatedData = await fetchTopRated.json();
  return {
    props: {
      topRated: topRatedData,
    },
  };
}

export default Home;
