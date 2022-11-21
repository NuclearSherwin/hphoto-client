import { createContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import GetImages from "./components/GetImage";
import useAxios from "./components/hooks/useAxios";
import Images from "./components/Images";
import Login from "./components/LoginAndRegister";
import Nav from "./components/Nav";
import Post from "./components/Post";
import PostList from "./components/PostList";
import Register from "./components/Register";

// create context
export const ImageContext = createContext();


function App() {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=dogs&client_id=${process.env.REACT_APP_UNFLASH_API_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  console.log(response);

  return (
    <div>
      {/* Navbar */}
      <Nav />
      <Routes>
        {/* <Route path="/signin" element={<LoginWithGoogle />} /> */}
        {/* <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" component={<Dashboard />} /> */}
        <Route path="/posts" element={<GetImages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/your-posts" element={<Post />} />
      </Routes>
      {/* <Post /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <div>
        <ImageContext.Provider value={value}>
          <Images  />
        </ImageContext.Provider>
      </div>
    </div>
  );
}

export default App;
