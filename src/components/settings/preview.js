import React from "react";

import CentralContainer from "../centralContainer";

import { PreviewContainer, BackgroundImagePreview } from "../../style/settings";
import { useSelector } from "react-redux";
import defaultImage from "../../image/defaultImage.jpg";

export default function Preview() {
  const useCustomImage = useSelector((state) => state.customImage);
  const imageFromDB = useSelector((state) => state.imagesFromDB);
  const blurLevel = useSelector((state) => state.blurLevel);

  function getTheImage() {
    if (!imageFromDB && useCustomImage === true) return null;
    return !useCustomImage ? defaultImage : imageFromDB.image;
  }

  return (
    <PreviewContainer>
      <BackgroundImagePreview
        blurLevel={blurLevel}
        backgroundImage={getTheImage}
      />

      <CentralContainer />
    </PreviewContainer>
  );
}
