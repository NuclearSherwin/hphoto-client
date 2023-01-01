import { format } from "date-fns";
import React from "react";
import moment from 'moment';

// other codes

const Posts = (props) => {
  let datePosted = props.createdDate;
  const timeAgo = moment(datePosted).fromNow();

  console.log(timeAgo);

  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <h1 className="text-slate-600 text-lg font-bold">
          {props.description}
        </h1>
        <p>{timeAgo}</p>
        <img
          src={props.imageSrc}
          alt="pic"
          loading="lazy"
          className="h-54 w-full object-cover rounded md:h-80"
        />
        {/* <p>{formattedDate}</p> */}
      </article>
    </>
  );
};

export default Posts;
