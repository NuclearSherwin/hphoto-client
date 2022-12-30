import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import images from "../assets/imgs";
import SearchField from "./SearchField";

const Nav = () => {
  // get user data from redux
  const user = useSelector((state) => state.user);
  const userLoginData = useSelector((state) => state.login.user);

  console.log(user.email);
  console.log(user.firstName);
  console.log(user.username);

  // log username after login
  console.log(userLoginData.username);

  const dispatch = useDispatch();

  return (
    <>
      <nav className="shadow-md w-full fixed top-0 left-0">
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
              <Link className="p-3" to="most-download">
                Most download
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

          <div className="hover:bg-gray-200 p-1 rounded w-15 mt-2 md:m-0">
            <div id="signInDiv">
              <Link to={"/register"}>Register</Link>
            </div>
          </div>
          <p>{user.username ? user.username : "undefined"}</p>
        </div>
      </nav>
    </>
  );
};

export default Nav;
