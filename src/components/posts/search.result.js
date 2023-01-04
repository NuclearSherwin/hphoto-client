import React from "react";
import { useSelector } from "react-redux";

const SearchResults = () => {
  const query = useSelector((state) => state.search);

  return <div>{query}</div>;
};

export default SearchResults;
