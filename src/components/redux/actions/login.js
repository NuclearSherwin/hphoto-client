import axios from "axios";

// Action
export const loginUser = (username, password) => {
  return (dispatch) => {
    axios
      .post('https://localhost:7178/api/users/login', { username, password })
      .then((response) => {
        dispatch({ type: 'LOGIN_SUCCESS', user: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', error: error.response.data.error });
      });
  };
};
