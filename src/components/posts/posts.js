import React from 'react'

const Posts = (props) => {
  return (
    <>
        <h1>{props.description}</h1>
        <article className="shadow-md bg-white rounded-3xl p-5">
        <img
          src={props.imgPath}
          alt="pic"
          loading="lazy"
          className="h-52 w-full object-cover rounded md:h-80"
        />
      </article>
    </>
  )
}

export default Posts