import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./auth/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="bg-[#A3DEB5] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-600 font-semibold text-xl">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          {user?.email ? (
            <React.Fragment>
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  <button onClick={handleLogOut} className="btn-ghost">
                    Sign Out
                  </button>
                </Link>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
