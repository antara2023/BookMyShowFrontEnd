import { useEffect, useState, useCallback, useMemo, useContext } from "react";
import { FavouriteContext } from "../context/favourite";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const Favourites = () => {
  const { favourites } = useContext(FavouriteContext);
  const [favouriteList, setFavouriteList] = useState(favourites);
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [searchedFavourites, setSearchedFavourites] = useState(favourites);

  const genres = useMemo(
    () => Array.from(new Set(favourites.map((favourite) => favourite.genre))),
    [favourites]
  );

  const handleSearch = useCallback(
    (e) => {
      const searchText = e.target.value;
      setFavouriteList(() => {
        const filteredFavList = searchedFavourites.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        );
        return filteredFavList;
      });
    },
    [searchedFavourites]
  );

  const filterFavourites = useCallback(
    (genreId) => {
      setSearchedFavourites(() => {
        const filteredFavList = genreId
          ? favourites.filter((movie) => movie.genre == genreId)
          : favourites;
        setFavouriteList(filteredFavList);
        return filteredFavList;
      });
    },
    [favourites]
  );

  const handleSort = useCallback(
    (sortType) => {
      setFavouriteList(() => {
        const filteredFavList = [...searchedFavourites].sort((a, b) =>
          sortType ? a.popularity - b.popularity : b.popularity - a.popularity
        );
        return filteredFavList;
      });
    },
    [searchedFavourites]
  );

  return (
    <div className="favourite-page">
      <h1>Favourites</h1>
      <div className="wrapper">
        <div className="left-section">
          <div className="genres-wrapper">
            <ul>
              <li
                className={!selectedGenreId ? "selected" : ""}
                onClick={() => {
                  setSelectedGenreId();
                  filterFavourites();
                }}
              >
                {" "}
                All Genres
              </li>
              {genres?.map((genreId) => {
                return (
                  <li
                    className={selectedGenreId === genreId ? "selected" : ""}
                    onClick={() => {
                      setSelectedGenreId(genreId);
                      filterFavourites(genreId);
                    }}
                  >
                    {genreId}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right-section">
          <input
            type="search"
            onChange={handleSearch}
            placeholder="Search by title"
          />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Genre</th>
                <th>
                  <span onClick={() => handleSort(true)}>^</span>Popularity
                  <span onClick={() => handleSort(false)}>v</span>
                </th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {favouriteList?.map((favourite) => {
                return (
                  <tr>
                    <td>
                      <img
                        width="60px"
                        src={favourite.thumbnail}
                      />
                    </td>
                    <td>{favourite.title}</td>
                    <td>{favourite.genre}</td>
                    <td>{favourite.popularity}</td>
                    <td>{favourite.rating}</td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
