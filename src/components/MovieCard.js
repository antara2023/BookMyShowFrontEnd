import { Link } from "react-router-dom";
import { FavouriteContext } from "../context/favourite";
import { useContext } from "react";

const MovieCard = ({ movie }) => {
  const { setFavouries } = useContext(FavouriteContext);
  const handleFavouriteClick = () => {
    setFavouries((previousFavMovies) => [...previousFavMovies, movie]);
  };
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${movie.thumbnail})` }}
    >
      <h3>
        <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
      </h3>
      <button onClick={handleFavouriteClick}>Add To Favourites</button>
    </div>
  );
};

export default MovieCard;
