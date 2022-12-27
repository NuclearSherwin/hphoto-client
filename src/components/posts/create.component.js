import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../functions/post_crud";
import { getAllTags } from "../functions/tag_crud";

const defaultImageSrc = null;

const initValues = {
  description: "",
  userId: 0,
  tagId: 0,
  createDate: "",
  imagePath: "",
  imageFile: null,
  imageSrc: null,
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
  const [selectedOption, setSelectedOption] = useState("");
  const [tags, setTags] = useState([]);

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

    // if (e.target.name === "description")
    //   error.description =
    //     e.target.value.length === 0 ? "Description is required!" : "";
    // if (e.target.name === "userId")
    //   error.userId = e.target.value.length === 0 ? "User ID is required!" : "";

    // if (e.target.name === "tagId")
    //   error.tagId = e.target.value.length === 0 ? "Tag ID ID is required!" : "";

    // if (e.target.name === "createDate")
    //   error.createDate =
    //     e.target.value.length === 0 ? "CreateDate is required!" : "";

    setError({ ...error });
  };

  const onInit = () => {
    getAllTags()
      .then((res) => {
        setTags(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
    error.tagId = post.tagId.length === 0 ? "Tag ID is required!" : "";
    error.createDate =
      post.createDate.length === 0 ? "Create date is required!" : "";

    setError({ ...error });
    validate = Object.values(error).every((x) => x === "");

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
    // if (validateInput) {
    const formData = new FormData();
    formData.append("description", post.description);
    formData.append("userId", post.userId);
    formData.append("tagId", post.tagId);
    formData.append("createDate", post.createDate);
    formData.append("imagePath", post.imagePath);
    formData.append("imageFile", post.imageFile);

    // const url = `https://localhost:7178/api/posts`
    // axios.post(url, formData).then((res) => {
    //   console.log(res)
    // })

    createPost(formData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err.message));

    setPosts(initValues);
    // }

    console.log(post);
  };

  return (
    <div className="px-5 max-w-7xl mx-auto container mt-20">
      <div className="mx-auto sm:px-4">
        <h2 className="text-center">Add new Topic</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label>Description</label>
            <input
              name="description"
              type="text"
              value={post.description}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {error.description &&
              {
                /* <small className="text-sm text-red-500">
                {error.description}
              </small> */
              }}
          </div>
          <div className="mb-4">
            <label>userId</label>
            <input
              name="userId"
              type="text"
              value={post.userId}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {/* {error.userId && (
              <small className="text-sm text-red-500">{error.userId}</small>
            )} */}
          </div>
          {/* -------------- */}
          <div className="mb-4">
            <label htmlFor="topic-select">Select topic</label>
            <select
              name="tagId"
              id="topic-select"
              value={post.tagId}
              onChange={(e) => onChange(e)}
            >
              {tags.map((topic) => (
                <option value={topic.id}>{topic.description}</option>
              ))}
            </select>
            {/* {error.tagId && (
              <small className="text-sm text-red-500">{error.tagId}</small>
            )} */}
          </div>
          {/* -------------- */}

          <div className="mb-4">
            <label>Post date</label>
            <input
              type="text"
              name="createDate"
              value={post.createDate}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {/* {error.createDate && (
              <small className="text-sm text-red-500">
                {error.createDate}
              </small>
            )} */}
          </div>

          {/* <div className="mb-4">
            <label>Publish Day</label>
            <DateTimePicker
              onChange={setDate}
              value={date}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            />
          </div> */}
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => showPreview(e)}
            />
          </div>
          <img src={post.imageSrc} className="w-40 h-60" alt="pics" />
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

export default PostCreate;
