import { useContext } from "react";
import { useState, useEffect } from "react";
import { ImageContext } from "../App";
import { useDispatch } from "react-redux";
import { search } from "./redux/actions/search";

export default function SearchField() {
  const dispatch = useDispatch();


  function handleSubmit(event) {
    if (event.key === "Enter") {
      const query = event.target.value;
      dispatch(search(query));
    }
  }

  return (
    <>
      <section className="sm:flex items-center justify-center">
        <div className="relative items-center ">
          <input
            placeholder="Search"
            type="search"
            name="search"
            // value={searchTerm}
            onKeyDown={(e) => handleSubmit(e)}
            // onChange={(e) => setSearchValue(e.target.value)}
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
    </>
  );
}
