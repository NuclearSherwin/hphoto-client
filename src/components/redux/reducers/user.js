import React from "react";
import { call, put, takeLatest } from 'redux-saga/effects';
const REGISTER_USER = 'REGISTER_USER';
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';



// Reducer to handle the REGISTER_USER action
export function userReducer(state = {}, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
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
