import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ placeholderImage }) {
  return (
    <div className="imageList">
      {placeholderImage.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
