import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { movies as movieData } from "../mockData/movieData";

const MovieList = () => {
  const [movies, setMovies] = useState();
  const [moviePageStore, setMoviePageStore] = useState({});

  const fetchMovieData = (pageNumber = 1, type = "ALL") => {
    const pageWiseMovie = moviePageStore[pageNumber];
    if (pageWiseMovie) {
      setMovies(pageWiseMovie);
    } else {
      fetch(
        `http://localhost:5050/api/movie/list?type=${type}&page=${pageNumber}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          setMoviePageStore((preVal) => {
            return {
              ...preVal,
              [pageNumber]: data,
            };
          });
        });
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div className="movie-list">
      {movies?.results?.map((movie) => {
        return <MovieCard movie={movie} key={movie._id} />;
      })}
      {movies?.total_pages && (
        <Pagination
          totalPages={movies?.total_pages}
          fetchMovieData={fetchMovieData}
        />
      )}
    </div>
  );
};

export default MovieList;
