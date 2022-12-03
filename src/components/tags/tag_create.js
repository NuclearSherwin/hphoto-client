import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTag } from "../functions/tag_crud";

const initValues = {
  name: "",
  description: "",
  rating: 0,
};

const initErrors = {
  name: "",
  description: "",
  rating: "",
};

const TagCreate = () => {
  const [tag, setTag] = useState(initValues);
  const [error, setError] = useState(initErrors);
  const navigate = useNavigate();

  const onChange = (e) => {
    setTag({ ...tag, [e.target.name]: e.target.value });

    if (e.target.value.name === "name")
      error.name =
        e.target.value.length === 0 ? "Topics' name is required!" : "";

    if (e.target.value.name === "description")
      error.description =
        e.target.value.length === 0 ? "Description is required!" : "";

    setError({ ...error });
  };

  // validate input
  const validateInput = () => {
    let validate = true;
    error.name = tag.name.length === 0 ? "Topic's name is required!" : "";
    error.description =
      tag.description.length === 0 ? "Topic's description is required!" : "";

    validate = Object.values(error).every((x) => x === "");

    return validate;
  };

  // onSubmit to handle
  const onSubmit = (e) => {
    if (validateInput) {
      e.preventDefault();
      createTag(tag)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));

      setTag(initValues);
    }
  };

  return (
    <div className="px-5 max-w-7xl mx-auto container mt-20">
      <div className="mx-auto sm:px-4">
        <h2 className="text-center">Add new Topic</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label>Topic</label>
            <input
              name="name"
              type="text"
              value={tag.name}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
            {error.name && (
              <small className="text-sm text-red-500">{error.name}</small>
            )}
          </div>
          <div className="mb-4">
            <label>Description</label>
            <input
              name="description"
              type="text"
              value={tag.description}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
          </div>
          <div className="mb-4">
            <label>Rating</label>
            <input
              name="rating"
              type="text"
              value={tag.rating}
              onChange={(e) => onChange(e)}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            ></input>
          </div>
          {/* <div className="mb-4">
            <label>Publish Day</label>
            <DateTimePicker
              onChange={setDate}
              value={date}
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
            />
          </div> */}
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

export default TagCreate;
