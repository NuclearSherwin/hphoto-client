import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../functions/user_crud";

const initErrors = {
  username: "",
  password: "",
};

const initValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initValues);
  const [error, setError] = useState(initErrors);

  const navigate = useNavigate();

  // validate input
  const validate = () => {
    let validate = true;
    error.username = user.username.length === 0 ? "Username is required!" : "";
    error.password = user.password.length === 0 ? "Password is required!" : "";

    setError({ ...error });
    validate = Object.values(error).every((o) => o === "");

    return validate;
  };

  // onchange
  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });

    setError({ ...error });
  };

  let handleLoginSubmit = async (e) => {
    if (validate()) {
      e.preventDefault();
      login(user)
        .then((res) => {
          setUser(initValues);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          alert(err.message);
        });
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">HPhoto</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
            Explore your interests, meet new friends & expand your horizons
          </p>
        </div>
        {/* <LoginForm /> */}
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
          <h2 className="p-3 text-3xl font-bold text-pink-400">HPhoto</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
          {/* <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="socialIcon">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </div>
            <div className="socialIcon">
              <i class="fa-brands fa-github fa-2xl"></i>
            </div>
            <div className="socialIcon">
              <i class="fa-brands fa-google fa-2xl"></i>
            </div>
          </div> */}
          {/* Inputs */}

          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col items-center justify-center">
              <input
                type="text"
                name="username"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Username"
                value={user.username}
                onChange={(e) => onChange(e)}
              ></input>
              {error.username && (
                <small className="text-red-500 text-sm">{error.username}</small>
              )}
              <input
                type="password"
                name="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Password"
                value={user.password}
                onChange={(e) => onChange(e)}
              ></input>
              {error.password && (
                <small className="text-red-500 text-sm">{error.password}</small>
              )}
              <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
                Sign In
              </button>
            </div>
          </form>

          {/* ----- */}
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="text-blue-400 mt-4 text-sm hover:underline">
            Don't have an account?
          </p>
          <Link
            to={"/register"}
            className="text-blue-400 mb-4 text-sm font-medium cursor-pointer hover:underline"
            // onClick={() => setIsLogin(false)}
          >
            Create a New Account?
          </Link>
          {/* <div className="message">{message ? <p>{message}</p> : null} </div> */}
        </div>
        {/* {isLogin ? <LoginForm /> : <SignUpForm />} */}
      </main>
    </div>
  );
};

export default Login;
