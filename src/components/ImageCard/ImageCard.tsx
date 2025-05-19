import s from "./ImageCard.module.css";
import React from "react";
import { ImageData } from "../../types/ImageData";

interface ImageCardProps {
  sendImg: ImageData;
  handleClick: (img: ImageData) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ handleClick, sendImg }) => {
  const onImageClick = (): void => {
    handleClick(sendImg);
  };

  return (
    <div className={s.imageCard}>
      <img
        onClick={onImageClick}
        src={sendImg.urls.small}
        alt={sendImg.alt_description || "Image"}
        width={280}
        height={280}
      />
    </div>
  );
};

export default ImageCard;
