import React from "react";

// Reducer to handle the REGISTER_USER action
function userReducer(state = {}, action) {
  switch (action.type) {
    case "REGISTER_USER":
      // save the user data to local store
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default userReducer;
