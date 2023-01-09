import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutSuccess } from "../redux/actions/user";

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    try {
      dispatch(logoutSuccess());
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg mt-40">
      <img
        src={user.imageSrc}
        alt=""
        className="h-32 w-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
        {user.firstName}
      </h1>
      <p className="text-center text-gray-600 mb-4">Email: {user.email}</p>
      <div className="flex justify-around items-center text-gray-600 mb-4">
        <div className="text-center">
          {/* <p className="text-2xl font-bold mb-2">{user.followers.length}</p> */}
          <p className="text-2xl font-bold mb-2">100</p>
          <p>Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">100</p>
          <p>Following</p>
        </div>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Follow
      </button>
      <Link
        to={"/user-update/" + user.id}
        className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow"
      >
        Update
      </Link>
      <button
        onClick={() => logout()}
        className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
