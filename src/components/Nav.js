import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import images from "../assets/imgs";

const Nav = () => {
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
          </ul>
          <section className="sm:flex items-center justify-center">
            <div className="relative items-center ">
              <input
                placeholder="Search"
                className="bg-gray-200 rounded-full px-12 py-2 outline-none w-96"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-1 left-0 ml-12 md:top-1 md:left-0 sm:ml-2 sm:mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </section>
          <div className="hover:bg-gray-200 p-1 rounded w-15 mt-2 md:m-0">
            <div id="signInDiv"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
