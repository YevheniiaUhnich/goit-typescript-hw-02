import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageData } from "../../types/ImageData";

interface ImageGalleryProps {
  sendImages: ImageData[];
  handleClick: (img: ImageData) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  sendImages,
  handleClick,
}) => {
  return (
    <ul className={s.imageGallery}>
      {sendImages.map((item) => (
        <li key={item.id}>
          <ImageCard sendImg={item} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
