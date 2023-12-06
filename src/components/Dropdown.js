import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const Dropdown = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  let dropdownButton;
  let dropdownMenu;
  let isDropdownOpen;
  const navigate = useNavigate();
  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
      dropdownMenu.classList.remove("hidden");
    } else {
      dropdownMenu.classList.add("hidden");
    }
  }
  useEffect(() => {
    dropdownButton = document.getElementById("dropdown-button");
    dropdownMenu = document.getElementById("dropdown-menu");
    isDropdownOpen = false;
    dropdownButton.addEventListener("click", toggleDropdown);
    window.addEventListener("click", (event) => {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownMenu.classList.add("hidden");
        isDropdownOpen = false;
      }
    });
  }, []);

  const HandleSignin = ()=>{
    setIsLoggedIn(true)
    navigate('/sign-in')
  }
  const HandleSignout = ()=>{
    setIsLoggedIn(false) 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center z-10">
      <div className="relative inline-block text-left">
        <button
          id="dropdown-button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-white-0, focus:ring-2 focus:ring-offset-2"
        >
          <img src="KH.png" className="w-15 h-7" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="dropdown-menu"
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
        >
          <div
            className="py-2 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            <Link
              to="/myprofile"
              className="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
              role="menuitem"
            >
              My Profile
            </Link>
            {isLoggedIn ? (
              <a onClick={HandleSignout}
                href="#"
                className="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                role="menuitem"
              >
                Sign Out
              </a>
            ) : (
              <a onClick={HandleSignin}
                href="#"
                className="block px-4 py-2 mb-1 text-sm text-gray-700 rounded-md bg-white hover:bg-gray-100"
                role="menuitem"
              >
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
