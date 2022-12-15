import React, { useState } from "react";



const Post = () => {
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [tagId, setTagId] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    // api
    const api = "https://localhost:7178/api/Posts";
    try {
      const formData = new FormData();

      formData.append("description", description);
      formData.append("userId", userId);
      formData.append("tagId", tagId);
      formData.append("image", image);

      let result = await fetch(api, {
        method: "POST",
        body: formData,
      });
      console.log(result);

      if (result.status === 200) {
        setDescription("");
        setUserId("");
        setTagId("");
        setImage(null);
        setMessage("Post created");
      } else {
        setMessage("Some error ocurred");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-40">
      <form className="" onSubmit={handleSubmit}>
        <div className="my-2">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="userId"
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User"
          />
        </div>
        <div className="">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="tagId"
            placeholder="Tag"
            onChange={(e) => setTagId(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Submit button */}
        <input
          type="submit"
          className="px-6 py-2 bg-blue-400 rounded"
          name="create-post"
        />

        <div className="message">{message ? <p>{message}</p> : null} </div>
      </form>
    </div>
  );
};

export default Post;
