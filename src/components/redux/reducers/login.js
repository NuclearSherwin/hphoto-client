import React from "react";

// Reducer
const initialState = {
  user: {},
  error: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.user,
        error: '',
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
}
