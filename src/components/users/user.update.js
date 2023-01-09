import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../functions/user_crud";

const initValues = {
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
};

const initErrors = {
  firstName: "",
  lastName: "",
  password: "",
  passwordConfirmation: "",
};
const UserUpdate = () => {
  const [user, setUser] = useState(initValues);
  const [error, setError] = useState(initErrors);
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate();

  // get user info form local store (redux)
  const userStore = useSelector((state) => state.user);

  useEffect(() => {
    getUserById(userId, userStore.token)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateInput) {
      updateUser(userId, user, userStore.token)
        .then((res) => {
        // reset the state of book
          setUser(initValues);
          navigate("/profile");
        })
        .catch((err) => console.log(err.message));

      setUser(initValues);
    }
  };

  const validateInput = () => {
    let validate = true;

    error.firstName =
      user.firstName.length === 0 ? "first name is required!" : "";

    error.lastName = user.lastName.length === 0 ? "last name is required!" : "";
    error.password = user.password.length === 0 ? "password is required!" : "";

    error.passwordConfirmation =
      user.passwordConfirmation.length === 0
        ? "confirm password does not match!"
        : "";

    setError({ ...error });

    validate = Object.values(error).every((x) => x === "");

    return validate;
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });


    if (e.target.name === "firstName")
      error.firstName =
        e.target.value.length === 0 ? "first name is required!" : "";

    if (e.target.name === "lastName")
      error.lastName =
        e.target.value.length === 0 ? "last name is required!" : "";

    if (e.target.name === "password")
      error.password =
        e.target.value.length === 0 ? "password is required!" : "";

    if (e.target.name === "passwordConfirmation")
      error.passwordConfirmation =
        e.target.value.length === 0 ? "confirm password does not match!" : "";

    setError({ ...error });
  };

  return (
    <div>
      <div className="px-5 max-w-7xl mx-auto container mt-20">
        <div className="mx-auto sm:px-4">
          <h2 className="text-center">Update user information</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label>First name</label>
              <input
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={(e) => onChange(e)}
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              ></input>
              {error.firstName && (
                <small className="text-sm text-red-500">
                  {error.firstName}
                </small>
              )}
            </div>
            <div className="mb-4">
              <label>Last name</label>
              <input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={(e) => onChange(e)}
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              ></input>
              {error.lastName && (
                <small className="text-sm text-red-500">{error.lastName}</small>
              )}
            </div>
            <div className="mb-4">
              <label>New password</label>
              <input
                name="password"
                type="text"
                value={user.password}
                onChange={(e) => onChange(e)}
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              ></input>
              {error.password && (
                <small className="text-sm text-red-500">{error.password}</small>
              )}
            </div>
            <div className="mb-4">
              <label>Confirm new password</label>
              <input
                name="passwordConfirmation"
                type="text"
                value={user.passwordConfirmation}
                onChange={(e) => onChange(e)}
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              ></input>
              {error.passwordConfirmation && (
                <small className="text-sm text-red-500">
                  {error.passwordConfirmation}
                </small>
              )}
            </div>
            <button
              type="submit"
              className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
