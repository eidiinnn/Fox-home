import React from "react";
import { useSelector } from "react-redux";
import { CentralContainerImage, BackgroundImage } from "../style/image";
import defaultImage from "./defaultImage.jpg";

export default function GetImage(props) {
  const useCustomImage = useSelector((state) => state.customImage);
  const imageFromDB = useSelector((state) => state.imagesFromDB);
  const blurLevel = useSelector((state) => state.blurLevel);

  if (!imageFromDB && useCustomImage === true) return null;

  function selectImage() {
    return !useCustomImage
      ? {
          background: defaultImage,
          CentralContainerImage: defaultImage,
        }
      : {
          background: imageFromDB.image,
          CentralContainerImage: imageFromDB.cropImage,
        };
  }

  function showImage(type) {
    const image = selectImage();

    switch (type) {
      case "centralDivImage":
        return <CentralContainerImage src={image.CentralContainerImage} />;
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
