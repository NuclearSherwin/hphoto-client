import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

    // validate fields
    const [userNameError, setUserNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")

  // validate input
  const validate = () => {
    const errors = {}
    if (username === "")
      errors.userName = "username is required!";
    if (password === "")
      errors.password = "Password is required!";
    

    return Object.keys(errors).length === 0 ? null : errors;
  }


  let handleLoginSubmit = async (e) => {
    e.preventDefault();
    // api
    const api = "https://localhost:7178/api/Users/Login";
    try {
      const errors = validate();

      if (errors) {
        setUserNameError(errors.userName)
        setPasswordError(errors.password)
      }
      else {
        setUserNameError("")
        setPasswordError("")
      }

      // call api
      let res = await fetch(api, {
        method: "POST",
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let resJson = await res.json();

      if (res.status === 200) {
        setUserName("");
        setPassword("");
        setMessage("Sign up successfully!");
        // window.location.reload();
        navigate("/posts");
      } else {
        setMessage("Some error ocurred");
      }
    } catch (error) {
      console.log(error.message);
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
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <p className="text-red-500 text-sm">{userNameError}</p>
            <input
              type="password"
              className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className="text-red-500 text-sm">{passwordError}</p>
            <button className="rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
              Sign In
            </button>
          </div>
        </form>
        
        {/* ----- */}
          <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
          <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
          <Link to={'/register'}
            className="text-blue-400 mb-4 text-sm font-medium cursor-pointer"
            onClick={() => setIsLogin(false)}
          >
            Create a New Account?
          </Link>
          <div className="message">{message ? <p>{message}</p> : null} </div>
        </div>
        {/* {isLogin ? <LoginForm /> : <SignUpForm />} */}
      </main>
    </div>
  );
};

export default Login;
