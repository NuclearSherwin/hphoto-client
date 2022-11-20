import React, { useEffect, useState } from 'react'
import GetImages from './GetImage'

const PostList = () => {
    // const [query, setQuery] = useState("people")
    // const [loading, setLoading] = useState(true)
    // const [data, setData] = useState([])

    // const getPhotos = async () => {
    //     setLoading(true);
    //     await fetch(`https://api.pexels.com/v1/`, {
    //         headers: {
    //             Authorization: ''
    //         }
    //     })
    //     .then((resp) => {
    //         return resp.json()
    //     })
    //     .then((data) => {
    //         setLoading(false);
    //         setData(data.photos);
    //     });
    // };

    // useEffect(() => {
    //     getPhotos();
    // }, [])


    // const onKeyDownHandler = (e) => {
    //     if (e.keyCode === 13){
    //         getPhotos();
    //     }
    // }

  return (
    <div className='mt-16'>
        <h1>Photos</h1>
        <GetImages />
    </div>
  )
}

export default PostList