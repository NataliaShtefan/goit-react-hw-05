import { useEffect, useState } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "../../services/api";
import s from "./HomePage.module.css";
const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      
      } catch {
        setError("Error fetching trending movies. Please try again later.");
      }
    };

    getData();
  }, []);

  return (
    <div className={s.div}>
      {isError ? <p>{isError}</p> : <MoviesList movies={movies} />}
    </div>
  );
};

export default HomePage;