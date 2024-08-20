
import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.ul}>
      {movies.map((movie) => (
        <li className={css.li} key={movie.id}>
          <div className={css.divLi}>
            <Link
              className={css.link}
              to={`/movies/${movie.id}`}
              state={location}
            >
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p className={css.p}>{movie.title}</p>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;