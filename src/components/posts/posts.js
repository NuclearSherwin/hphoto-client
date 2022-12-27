import { format } from "date-fns";
import React from "react";

const Posts = (props) => {
  // const formattedDate = `${
  //   props.createDate.getMonth() + 1
  // }/${props.createDate.getDate()}/${props.createDate.getFullYear()} ${props.createDate.getHours()}:${props.createDate.getMinutes()}:${props.createDate.getSeconds()}`;
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <h1 className="text-slate-600 text-lg font-bold">
          {props.description}
        </h1>
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
