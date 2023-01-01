import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../functions/user_crud";
import { registerUser } from "../redux/actions/register";

const initErrors = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  passwordConfirmation: "",
};

const initValues = {
  email: "",
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  passwordConfirmation: "",
};

const Register = () => {
  const [user, setUser] = useState(initValues);
  const [error, setError] = useState(initErrors);
  const navigate = useNavigate();
  // redux part
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    setError({ ...error });
  };

  const validate = () => {
    let validate = true;
    error.email = user.email.length === 0 ? "email is required" : "";
    error.firstName =
      user.firstName.length === 0 ? "first name is required" : "";
    error.lastName = user.lastName.length === 0 ? "last name is required" : "";
    error.username = user.username.length === 0 ? "username is required" : "";
    error.password = user.password.length === 0 ? "password is required" : "";
    error.passwordConfirmation =
      user.passwordConfirmation.length === 0
        ? "password confirm not match"
        : "";

    setError({ ...error });
    // eslint-disable-next-line no-const-assign
    validate = Object.values(error).every((x) => x === "");

    return validate;
  };

  // submit data with redux
  function handleSubmit(event) {
    event.preventDefault();

    if (validate()) {
      const formData = new FormData(event.target);
      // formData.append("email", user.email);
      // formData.append("firstName", user.firstName);
      // formData.append("lastName", user.lastName);
      // formData.append("username", user.username);
      // formData.append("password", user.password);
      // formData.append("passwordConfirmation", user.passwordConfirmation);

      createUser(formData)
        .then((res) => {
          // save to local store of redux before navigate
          const userData = Object.fromEntries(formData);
          dispatch(registerUser(userData));
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    }
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">HPhoto</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
            Explore your interests, meet new photos & expand your ideas horizons
          </p>
        </div>
        {/* {isLogin ? <LoginForm /> : <SignUpForm />} */}

        {/* --------------------------- */}
        <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
          <h2 className="p-3 text-3xl font-bold text-white">HPhoto</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <h3 className="text-xl font-semibold text-white pt-2">
            Create Account!
          </h3>
          {/* Inputs */}
          <form onSubmit={handleSubmit} className="text-black">
            <div className="flex flex-col items-center justify-center mt-2">
              <input
                type="email"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={(e) => onChange(e)}
              ></input>
              {error.email && (
                <small className="text-red-500 text-sm">{error.email}</small>
              )}
              <input
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={user.firstName}
                onChange={(e) => onChange(e)}
              ></input>
              {error.firstName && (
                <small className="text-red-500 text-sm">{error.firstName}</small>
              )}
              <input
                type="text"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Last Name"
                name="lastName"
                value={user.lastName}
                onChange={(e) => onChange(e)}
              ></input>
              {error.lastName && (
                <small className="text-red-500 text-sm">{error.lastName}</small>
              )}
              <input
                type="text"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="username"
                name="username"
                value={user.username}
                onChange={(e) => onChange(e)}
              ></input>
              {error.username && (
                <small className="text-red-500 text-sm">{error.username}</small>
              )}
              <input
                type="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={(e) => onChange(e)}
              ></input>
              {error.password && (
                <small className="text-red-500 text-sm">{error.password}</small>
              )}
              <input
                type="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Confirm password"
                name="passwordConfirmation"
                value={user.passwordConfirmation}
                onChange={(e) => onChange(e)}
              ></input>
              {error.passwordConfirmation && (
                <small className="text-red-500 text-sm">{error.passwordConfirmation}</small>
              )}
              <button
                type="submit"
                className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <p className="text-white mt-4 text-sm hover:underline">
            Already have an account?
          </p>
          <Link
            to={"/login"}
            className="text-white mb-4 text-sm font-medium cursor-pointer hover:underline"
            //   onClick={() => setIsLogin(true)}
          >
            Sign In to your Account?
          </Link>
          {/* <div className="message">{message ? <p>{message}</p> : null} </div> */}
        </div>
      </main>
    </div>
  );
};

export default Register;
