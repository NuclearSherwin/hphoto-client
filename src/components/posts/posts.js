import { format } from "date-fns";
import React, { useState } from "react";
import moment from "moment";
import { like } from "../functions/like";

// other codes

const Posts = (props) => {
  let datePosted = props.createdDate;
  const timeAgo = moment(datePosted).fromNow();
  // set hover
  const [hover, setHover] = useState(false);
  const [likes, setLike] = useState(0);

  // like count
  const handleClick = async () => {
    setLike(likes + 1);
    console.log(likes);
    // like(likes)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative shadow-md bg-white rounded-3xl"
      >
        <img
          src={props.imageSrc}
          alt="pic"
          loading="lazy"
          className="h-54 w-full object-cover rounded md:h-80"
        />
        {hover && (
          <div
            className="absolute p-5"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.5)",
              color: "white",
            }}
          >
            <div>
              <h1 className="text-white text-lg font-bold">
                {props.description}
              </h1>
              <p>published: {timeAgo}</p>
            </div>
            <span onClick={() => handleClick()}>
              {likes < 1 ? (
                <i class="fa-regular fa-heart"></i>
              ) : (
                <i class="fa-sharp fa-solid fa-heart"></i>
              )}
              {likes < 2 ? <p>{likes} like</p> : <p>{likes} likes</p>}
            </span>
          </div>
        )}
      </article>
    </>
  );
};

export default Posts;
