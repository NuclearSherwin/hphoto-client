import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import images from "../assets/imgs";
import SearchField from "./SearchField";
import { logoutSuccess } from "./redux/actions/user";

const Nav = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  // get user data from redux
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logout = () => {
    if (dispatch(logoutSuccess())) {
      navigate("/your-posts");
      setIsLogin(false);
      alert("logout successfully!");
    }
  };

  return (
    <>
      <nav className="shadow-md w-full fixed top-0 left-0 z-50">
        <div className="md:flex bg-white py-2 items-center justify-around">
          <div className="sm:flex flex">
            <span className="">
              <img
                className="ml-2 fill-green-400"
                src={images.logo}
                alt="HPhoto"
                width={42}
                height={45}
              />
            </span>
            <p className="text-xl font-medium p-2 text-cyan-500">HPhoto</p>
          </div>
          <ul className="lg:flex items-center text-start hidden">
            <li className="rounded hover:bg-gray-200 ml-1">
              <Link className="p-3" to="/posts">
                All
              </Link>
            </li>
            <li className="rounded hover:bg-gray-200 ml-1">
              <Link className="p-3" to="/trending">
                Trending
              </Link>
            </li>
            <li className="rounded hover:bg-gray-200 ml-1">
              <Link className="p-3" to="/your-posts/create">
                Create
              </Link>
            </li>
            <li className="rounded hover:bg-gray-200 ml-1">
              <Link className="p-3" to="/favorite">
                Favorite
              </Link>
            </li>
            <li className="rounded hover:bg-gray-200 ml-1">
              <Link className="p-3" to="/your-posts">
                Your posts
              </Link>
            </li>
          </ul>
          {/* Search part */}
          <SearchField />
          {/* End search part */}

          <p>
            {user.firstName ? (
              <Link className="hover:underline" to={"/profile"}>{user.firstName}</Link>
            ) : (
              <div className="hover:bg-gray-200 p-1 rounded w-15 mt-2 md:m-0">
                <div id="signInDiv">
                  <Link to={"/register"}>Register</Link>
                </div>
              </div>
            )}
          </p>
        </div>
      </nav>
    </>
  );
};

export default Nav;
