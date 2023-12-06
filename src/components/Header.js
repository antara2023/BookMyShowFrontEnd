import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
    return (
        <div className="header">
            <div>
                <span className="link"><Link to="/">Movie List</Link></span>
                <span  className="link"><Link to="/favourites">Favourites</Link></span>
                <span  className="link"><Link to="/add-movie">Add Movie</Link></span>
            </div>
            <Dropdown/>
        </div>
    )
}

export default Header;