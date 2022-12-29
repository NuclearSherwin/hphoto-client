import React from 'react';

const REGISTER_USER = 'REGISTER_USER'
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';

export const registerUser = (userData) => {
    return {
        type: REGISTER_USER,
        payload: userData,
    };
}

export const registerUserSuccess = (userData) => {
    return {
      type: REGISTER_USER_SUCCESS,
      payload: userData
    };
  }