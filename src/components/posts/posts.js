import { format } from "date-fns";
import React, { useState } from "react";
import moment from "moment";

// other codes

const Posts = (props) => {
  let datePosted = props.createdDate;
  const timeAgo = moment(datePosted).fromNow();
  // set hover
  const [hover, setHover] = useState(false);

  return (
    <>
      <article 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative shadow-md bg-white rounded-3xl">
        <img
          src={props.imageSrc}
          alt="pic"
          loading="lazy"
          className="h-54 w-full object-cover rounded md:h-80"
        />
        {hover && (
          <div className="absolute p-5" style={{ top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', color: 'white' }}>
            <h1 className="text-white text-lg font-bold">
              {props.description}
            </h1>
            <p>published: {timeAgo}</p>
          </div>
        )}
      </article>
    </>
  );
};

export default Posts;
