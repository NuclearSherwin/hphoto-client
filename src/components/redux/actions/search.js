import React from "react";

const SEARCH = "SEARCH";

export const search = (query) => {
  return {
    type: SEARCH,
    payload: query,
  };
};
