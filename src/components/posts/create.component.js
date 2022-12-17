import React, { useState } from "react";
import { createPost } from "../functions/post_crud";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initValues = {
  description: "",
  userId: 0,
  tagId: 0,
  imagePath: "",
  imageFile: null,
  imageSrc: null,
};

const initErrors = {
  description: "",
  userId: 0,
  tagId: 0,
  imagePath: "",
  imageFile: null,
  imageSrc: null,
};

const PostsCreate = () => {
  const [post, setPost] = useState(initValues);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });

    if (e.target.name === "userId")
      error.name = e.target.value.length === 0 ? "UserId is required!" : "";

    if (e.target.name === "tagId")
      error.name = e.target.value.length === 0 ? "TagId is required!" : "";

    if (e.target.name === "description")
      error.description =
        e.target.value.length === 0 ? "Topic's description is required!" : "";

    setError({ ...error });
  };

  // preview image
  const showImagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setPost({
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    }
  };

  // handle the submission from the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (validate()) {

    // }
    // const formData = new FormData();
    // formData.append("description", values.description);
    // formData.append("userId", values.userId);
    // formData.append("tagId", values.tagId);
    // formData.append("imageFile", values.imageFile);
    // formData.append("imagePath", values.imagePath);

    createPost(post)
     .then(res => {
        navigate("/");
     }) 
     .catch(err => console.log(err))

     setPost(initValues);
  };


  return (
    <div className="px-5 max-w-7xl mx-auto container mt-20">
      <div className="mx-auto sm:px-4">
        <h2 className="text-center">Add new Topic</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Description</label>
            <input
              name="description"
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label>User Id</label>
            <input
              name="userId"
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="mb-4">
            <label>Tag Id</label>
            <input
              name="tagId"
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              onChange={(e) => onChange(e)}
            ></input>
          </div>
          <div className="">
            <label>Image</label>
            <input
              id="image-uploader"
              type="file"
              accept="image/*"
              name="image"
              onChange={(e) => onChange(e)}
            />
          </div>
          {/* <div className="mb-4">
        <label>Publish Day</label>
        <DateTimePicker
          onChange={setDate}
          value={date}
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
        />
      </div> */}
          <div>
            <img src={post.imageSrc} alt="img" />
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
  );
};

export default PostsCreate;
