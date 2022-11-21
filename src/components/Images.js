import React, { useContext } from "react";
import { ImageContext } from "../App";
import Img from "./img";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading } = useContext(ImageContext);

  return (
    <div className="mt-16">
      <h1 className="text-center mt-6 underline text-2xl">
        Result for something
      </h1>
      {/* alight items and grid for items */}
      <div
        className="grid md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4"
      >
        {isLoading ? <Skeleton item={10} /> : response.map((data, key) => (
          <Img key={key} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Images;
