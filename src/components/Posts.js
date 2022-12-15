import React, { useState } from "react";
import { createPost } from "./functions/post2_crud";
import axios from "axios";

const initValues = {
    description: "",
  userId: 0,
  tagId: 0,
  imagePath: "",
  imageSrc: null,
  imageFile: null,
};

const Posts = () => {
  const [values, setValues] = useState(initValues);
  const [errors, setErrors] = useState({});

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // preview image
  const showImagePreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const validate = () => {
    let temp = {};
    temp.description = values.description == "" ? false : true;
    temp.imageSrc = values.imageSrc == null ? false : true;

    setErrors(temp);

    return Object.values(temp).every((x) => x == true);
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] ? "invalid-field" : "";

  const addOrEdit = (Data) => {
    createPost(Data)
        .then(res => {
            console.log(res.data);
            // onSuccess();
        })
        .catch(err => console.log(err))
  };

  // handle the submission from the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (validate()) {

    // }
    const formData = new FormData();
    formData.append("description", values.description);
    formData.append("userId", values.userId);
    formData.append("tagId", values.tagId);
    formData.append("imagePath", values.imagePath);
    formData.append("imageFile", values.imageFile);
    
    const response = await axios({
        method: 'post',
        url: 'https://localhost:7178/api/post2',
        data: formData,
        headers: {
            'Content-Type': `multipart/form-data`,
        },
    });

  };

  const resetForm = () => {
    setValues(initValues)
    document.getElementById('image-uploader').value = null;
    setErrors({})
  }

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
              onChange={handleInputChanges}
            ></input>
          </div>
          <div className="mb-4">
            <label>User Id</label>
            <input
              name="userId"
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              onChange={handleInputChanges}
            ></input>
          </div>
          <div className="mb-4">
            <label>Tag Id</label>
            <input
              name="tagId"
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              onChange={handleInputChanges}
            ></input>
          </div>
          <div className="">
            <label>Image</label>
            <input
              id="image-uploader"
              type="file"
              accept="image/*"
              className={
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" +
                applyErrorClass("imageSrc")
              }
              name="image"
              onChange={showImagePreview}
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
            <img src={values.imageSrc} alt="img" />
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

export default Posts;
