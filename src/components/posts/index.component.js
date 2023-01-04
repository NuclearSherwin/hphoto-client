import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fetch from "isomorphic-unfetch";
import { deletePost, getAllPosts } from "../functions/post_crud";
import Posts from "./posts";
import { useSelector } from "react-redux";
import axios from "axios";

const IndexComponent = () => {
  const [posts, setPosts] = useState([]);
  const searchResult = useSelector((state) => state.search);
  const user = useSelector((state) => state.user);

  let queryResult = searchResult.query;

  const filteredPosts = posts.filter((post) => post.userId === user.id);

  useEffect(() => {
    // fetchPost();
    onInit();
  }, []);

  // const fetchPost = async () => {
  //   const response = await axios(
  //     `https://localhost:7178/api/posts/1028`
  //   );

  //   setPosts(response);
  // };

  // init values
  const onInit = () => {
    getAllPosts()
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  // delete post
  const onDelete = (postId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure to delete the row")) {
      deletePost(postId).then(() => {
        // reload the data after delete
        onInit();
      });
    }
  };

  const BodyTable = () => {
    return posts.map((post) => (
      <tr key={post.id}>
        <td>{post.userId}</td>
        <td>{post.tagId}</td>
        <td>{post.description}</td>
        <td>
          <img src={post.imageSrc} alt="post-pic" />
        </td>
        <td>{post.createDate}</td>
        <td>
          <div className="d-flex">
            <Link to={"/edit/"} className="bg-yellow-500 px-4 py-2">
              Edit
            </Link>
            <button
              onClick={() => onDelete([post].id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="mt-16">
        {!posts ? (
          <h2 className="flex items-center justify-center h-screen font-bold text-2xl text-center text-slate-800">
            Loading...
          </h2>
        ) : (
          <section className="px-5 max-w-7xl mx-auto container">
            <h1
              className="font-bold text-3xl md:text-2xl text-slate-800 lg:text-4xl my-10 
          lg:mt-20 lg:mb-20 capitalize"
            >
              Your published
            </h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Posts key={post.id} {...post} />
              ))}
            </div>
            <div></div>
          </section>
        )}
      </div>
    </>
  );
};

export default IndexComponent;
