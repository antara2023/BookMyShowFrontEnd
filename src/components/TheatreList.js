import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const TheatreList = () => {
  const { movieId } = useParams();
  const [theatres, setTheatres] = useState([]);
  const loadTheatres = async () => {
    const response = await fetch(
      `http://localhost:5050/api/show/list?movie=${movieId}`
    );
    const theatreList = await response.json();
    setTheatres(theatreList);
  };
  useEffect(() => {
    loadTheatres();
  }, []);
  return (
    <div>
      <div>Theatre List</div>
      {theatres.map((theatre) => (
        <div className="flex border border-blue-500 p-4 rounded shadow m-2">
          <div className="w-1/3">
            <div className="text-lg font-bold">Theatre Name</div>
            <div className="text-sm font-regular">Theatre id:{theatre._id}</div>
          </div>
          <div className="w-2/3 flex gap-2">
            {theatre.shows.map((show) => (
              <Link to={`/show/${show._id}`}>
                <button className="bg-transparent border border-blue-500 py-2 px-4 hover:bg-blue-500 hover:text-white">
                  {format(new Date(show.datetime), "hh:mm a")}
                </button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TheatreList;