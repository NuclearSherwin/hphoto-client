import React from "react";

// init for login
const initState = {
  isAuthenticated: false,
  user: {},
  error: "",
};

// login
function loginReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        isAuthenticated: true,
        user: action.user,
        error: "",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default loginReducer;
