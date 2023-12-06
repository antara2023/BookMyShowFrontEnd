import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    description: "",
    popularity: "",
    thumbnail: "",
    bannerImage: "",
    trailerVideo: "",
    releaseDate: new Date(),
    rating: 0.0,
    genre: "",
    languages: [],
    theatreName: "",
    theatreNumber: 0,
    theatreLocation: ""
  });
  const titleRef = useRef("");
  const popularityRef = useRef("");
  const ratingRef = useRef("");
  const summaryRef = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Rerender");
  });

  const handleAddMovie = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(movieData),
        headers: {
          "Content-Type": "application/json",
          
        },
      });
      console.log("response", res)
      if (res.status != 200) {
        const response = await res.json();
        throw new Error(response.message);
      }
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleOnChange = (e, value) => {
    setMovieData({ ...movieData, [value]: e.target.value });
  };

  const handleOnSelect = (e) => {
    setMovieData({
      ...movieData,
      languages: [...movieData.languages, e.target.value],
    });
  };
  return (
    <div className="addMovie">
      <input style={{ border: "black" }} />
      <h1>Add New Movie</h1>
      <div className="row">
        <label>Title</label>
        <input
          ref={titleRef}
          type="text"
          value={movieData.title}
          onChange={(e) => handleOnChange(e, "title")}
        />
      </div>
      <div className="row">
        <label>description</label>
        <textarea
          rows="4"
          cols="50"
          value={movieData.description}
          onChange={(e) => handleOnChange(e, "description")}
        >
          Enter Description
        </textarea>
      </div>
      <div className="row">
        <label>Popularity</label>
        <input
          ref={popularityRef}
          type="text"
          value={movieData.popularity}
          onChange={(e) => handleOnChange(e, "popularity")}
        />
      </div>
      <div className="row">
        <label>Rating</label>
        <input
          ref={ratingRef}
          type="text"
          value={movieData.rating}
          onChange={(e) => handleOnChange(e, "rating")}
        />
      </div>
      <div className="row">
        <label>Thumbnail</label>
        <input
          ref={ratingRef}
          type="text"
          value={movieData.thumbnail}
          onChange={(e) => handleOnChange(e, "thumbnail")}
        />
      </div>
      <div className="row">
        <label>Banner Image</label>
        <input
          ref={ratingRef}
          type="text"
          value={movieData.bannerImage}
          onChange={(e) => handleOnChange(e, "bannerImage")}
        />
      </div>
      <div className="row">
        <label>trailerVideo</label>
        <input
          ref={ratingRef}
          type="text"
          value={movieData.trailerVideo}
          onChange={(e) => handleOnChange(e, "trailerVideo")}
        />
      </div>
      <div className="row">
        <label>Release Date</label>
        <input
          ref={ratingRef}
          type="date"
          value={movieData.releaseDate}
          onChange={(e) => handleOnChange(e, "releaseDate")}
        />
      </div>
      <div className="row">
        <label>Genre</label>
        <select
          value={movieData.genre}
          onChange={(e) => handleOnChange(e, "genre")}
        >
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
          <option value="Action">Action</option>
          <option value="Horror">Horror</option>
        </select>
      </div>
      <div className="rowLan">
        <label>Languages</label>
        <select
          className="languages"
          onChange={(e) => handleOnSelect(e)}
          data-te-select-init
          multiple
        >
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Telugu">Telugu</option>
          <option value="Bengali">Bengali</option>
        </select>
      </div>
      <div className="row">
        <label>Theatre Name</label>
        <input
          ref={ratingRef}
          type="string"
          value={movieData.theatreName}
          onChange={(e) => handleOnChange(e, "theatreName")}
        />
      </div>
      <div className="row">
        <label>Theatre location</label>
        <input
          ref={ratingRef}
          type="string"
          value={movieData.theatreLocation}
          onChange={(e) => handleOnChange(e, "theatreLocation")}
        />
      </div>
      <div className="row">
        <label>Phone Number</label>
        <input
          ref={ratingRef}
          type="Number"
          value={movieData.theatreNumber}
          onChange={(e) => handleOnChange(e, "theatreNumber")}
        />
      </div>
      <button onClick={handleAddMovie}>Add Movie</button>
      <div ref={summaryRef}></div>

    </div>
  );
};
export default AddMovie;
