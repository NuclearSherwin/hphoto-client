import { useState, useEffect } from "react";
import Image from "./Image";

export default function GetImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let api = `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNFLASH_API_KEY}`;
    const fetchImages = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setImages(data);
      console.log(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="mt-16">
      {!images ? (
        <h2 className="flex items-center justify-center h-screen font-bold text-2xl text-center text-slate-800">
          Loading...
        </h2>
      ) : (
        <section className="px-5 max-w-7xl mx-auto container">
          <h1 className="font-bold text-3xl md:text-2xl text-slate-800 lg:text-4xl my-10 
          lg:mt-20 lg:mb-20 capitalize">Best photos today!</h1>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <Image key={image.id} {...image} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
