import React, { useState } from "react";

const Register = () => {
  const [email, setRegisterEmail] = useState("");
  const [firstName, setRegisterFirstName] = useState("");
  const [lastName, setRegisterLastName] = useState("");
  const [userName, setRegisterUserName] = useState("");
  const [password, setRegisterPassword] = useState("");
  const [passwordConfirmation, setRegisterPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  let handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // api
    const api = "https://localhost:7178/api/Users/register";
    try {
      //   const formData = new FormData();

      //   formData.append("email", email);
      //   formData.append("firstName", firstName);
      //   formData.append("lastName", lastName);
      //   formData.append("username", userName);
      //   formData.append("password", password);
      //   formData.append("passwordConfirmation", passwordConfirmation);

      //   let result = await fetch(api, {
      //     method: "POST",
      //     body: formData,
      //   });
      //   console.log(result);

      let res = await fetch(api, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
          passwordConfirmation: passwordConfirmation,
        }),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      let resJson = await res.json();
      console.log(resJson);

      if (res.status === 200) {
        setRegisterEmail("");
        setRegisterFirstName("");
        setRegisterLastName("");
        setRegisterUserName("");
        setRegisterPassword("");
        setRegisterPasswordConfirmation("");
        setMessage("Sign up successfully!");
        // window.location.reload();
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
        {/* {isLogin ? <LoginForm /> : <SignUpForm />} */}

        {/* --------------------------- */}
        <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
          <h2 className="p-3 text-3xl font-bold text-white">HPhoto</h2>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <h3 className="text-xl font-semibold text-white pt-2">
            Create Account!
          </h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="socialIcon border-white">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="socialIcon border-white">
              <i class="fa-brands fa-github"></i>
            </div>
            <div className="socialIcon border-white">
              <i class="fa-brands fa-google"></i>
            </div>
          </div>
          {/* Inputs */}
          <form onSubmit={handleRegisterSubmit} className="text-black">
            <div className="flex flex-col items-center justify-center mt-2">
              <input
                type="email"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setRegisterEmail(e.target.value)}
              ></input>
              <input
                type="text"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => setRegisterFirstName(e.target.value)}
              ></input>
              <input
                type="text"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setRegisterLastName(e.target.value)}
              ></input>
              <input
                type="text"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="UserName"
                name="username"
                value={userName}
                onChange={(e) => setRegisterUserName(e.target.value)}
              ></input>
              <input
                type="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setRegisterPassword(e.target.value)}
              ></input>
              <input
                type="password"
                className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                placeholder="Confirm password"
                name="passwordConfirmation"
                value={passwordConfirmation}
                onChange={(e) =>
                  setRegisterPasswordConfirmation(e.target.value)
                }
              ></input>
              <button
                type="submit"
                className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <p className="text-white mt-4 text-sm">Already have an account?</p>
          <p
            className="text-white mb-4 text-sm font-medium cursor-pointer"
            //   onClick={() => setIsLogin(true)}
          >
            Sign In to your Account?
          </p>
          <div className="message">{message ? <p>{message}</p> : null} </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
