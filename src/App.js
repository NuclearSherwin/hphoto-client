import { useEffect } from "react";
import { createContext, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import GetImages from "./components/GetImage";
import useAxios from "./components/hooks/useAxios";
import Images from "./components/Images";
import Login from "./components/users/login";
import Nav from "./components/Nav";
import Post from "./components/Post";
import PostList from "./components/PostList";
import IndexComponent from "./components/posts/index.component";
import Register from "./components/users/register";
import TagCreate from "./components/tags/tag_create";
import TagEdit from "./components/tags/tag_edit";

import TagIndex from "./components/tags/tag_index";
import Posts from "./components/Posts";

// create context
export const ImageContext = createContext();

function App() {
  const navigate = useNavigate();
  // local store
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate('/register')
  //   }
  // }, []);

  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=dogs&client_id=${process.env.REACT_APP_UNFLASH_API_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  console.log(response);

  return (
    <div>
      <ImageContext.Provider value={value}>
        {/* Navbar */}
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" component={<Dashboard />} /> */}
          <Route path="/" index element={<GetImages />} />
          <Route path="/register" element={<Register />} />
          <Route path="/your-posts" element={<IndexComponent />} />
          <Route path="/topics" element={<TagIndex />} />
          <Route path="/topics-create" element={<TagCreate />} />
          <Route path="/topics-edit/:id" element={<TagEdit />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        {/* <Post /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <div>
          {/* <Images /> */}
        </div>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
