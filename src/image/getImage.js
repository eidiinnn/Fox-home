import React from "react";
import { useSelector } from "react-redux";
import { CentralContainerImage, BackgroundImage } from "../style/image";
import defaultImage from "./defaultImage.jpg";

export default function GetImage(props) {
  const imageFromDB = useSelector((state) => state.imagesFromDB);
  const blurLevel = useSelector((state) => state.blurLevel);
  const borderRadius = useSelector((state) => state.borderRadius);

  function selectImage() {
    if (imageFromDB && imageFromDB.image && imageFromDB.cropImage) {
      return {
        background: imageFromDB.image,
        CentralContainerImage: imageFromDB.cropImage,
      };
    } else {
      return {
        background: defaultImage,
        CentralContainerImage: defaultImage,
      };
    }
  }

  function showImage(type) {
    const image = selectImage();

    switch (type) {
      case "centralDivImage":
        return (
          <CentralContainerImage
            src={image.CentralContainerImage}
            borderRadius={borderRadius}
          />
        );
      case "background":
        return (
          <BackgroundImage blurLevel={blurLevel} image={image.background} />
        );
      default:
        return null;
    }
  }

  return <>{showImage(props.type)}</>;
}
