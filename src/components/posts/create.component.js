import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../functions/post_crud";
import { getAllTags } from "../functions/tag_crud";

let defaultImageSrc = "/img/default_upload_img.png";

const initValues = {
  description: "",
  userId: 0,
  tagId: 0,
  createDate: "",
  imagePath: "",
  imageFile: null,
  imageSrc: defaultImageSrc,
};

const initErrors = {
  description: "",
  userId: "",
  tagId: "",
  createDate: "",
  imageFile: null,
};

const PostCreate = () => {
  const [post, setPosts] = useState(initValues);
  const [error, setError] = useState(initErrors);
  const [tags, setTags] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const navigate = useNavigate();


  const onChange = (e) => {
    // method 1
    // setPosts({ ...post, [e.target.name]: e.target.value });

    // method 2
    const { name, value } = e.target;
    setPosts({
      ...post,
      [name]: value,
    });

    if (e.target.name === "description")
      error.description =
        e.target.value.length === 0 ? "Description is required!" : "";
    if (e.target.name === "userId")
      error.userId = e.target.value.length === 0 ? "User ID is required!" : "";

    setError({ ...error });
  };

  const onInit = () => {
    getAllTags()
      .then((res) => {
        setTags(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    // get current date time
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    onInit();
  }, []);

  // validate input
  const validateInput = () => {
    let validate = true;

    error.description =
      post.description.length === 0 ? "Description is required!" : "";
    error.userId = post.userId.length === 0 ? "User ID is required!" : "";

    setError({ ...error });
    validate = Object.values(error).every((o) => o === "");

    return validate;
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setPosts({
          ...post,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
      // post form data
    } else {
      setPosts({
        ...post,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };

  // onSubmit to handle
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", post.description);
    formData.append("userId", post.userId);
    formData.append("tagId", post.tagId);
    // formData.append("createDate", post.createDate);
    // get the current date time

    post.createDate = currentDateTime;
    formData.append("imagePath", post.imagePath);
    formData.append("imageFile", post.imageFile);

    createPost(formData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));

    setPosts(initValues);

    console.log(post);
  };

  return (
    <div className="px-5 max-w-7xl mx-auto container mt-20">
      <div className="flex">
      <div className="mx-auto sm:px-4">
        <h2 className="text-center">What's interesting thing to day?</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="text-sm">Description</label>
            <input
              name="description"
              type="text"
              placeholder="Add title"
              value={post.description}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {error.description && (
              <small className="text-sm text-red-500">
                {error.description}
              </small>
            )}
          </div>
          <div className="mb-4">
            <label className="text-sm">userId</label>
            <input
              name="userId"
              type="text"
              placeholder="Add user ID"
              value={post.userId}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {error.userId && (
              <small className="text-sm text-red-500">{error.userId}</small>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="topic-select" className="text-sm">
              Select topic
            </label>
            <div>
              <select
                name="tagId"
                id="topic-select"
                className="p-2 rounded"
                value={post.tagId}
                onChange={(e) => onChange(e)}
              >
                {tags.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            {/* <label>Post date</label> */}
            <input
              type="hidden"
              name="createDate"
              value={post.createDate}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
          </div>
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => showPreview(e)}
            />
          </div>
          <button
            type="submit"
            className="mt-5 rounded-lg inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-700"
          >
            Upload
          </button>
        </form>
      </div>
      {/* image */}
      <div>
        <img src={post.imageSrc} alt="" style={{width: "666.667px", width: "375px;"}} />
      </div>
      </div>
    </div>
  );
};

export default PostCreate;
