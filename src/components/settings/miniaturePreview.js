import React from "react";

import CentralContainer from "../centralContainer";

import { MiniaturePreviewContainer } from "../../style/settings";
import { useSelector } from "react-redux";
import defaultImage from "../../image/defaultImage.jpg";

export default function MiniaturePreview() {
  const useCustomImage = useSelector((state) => state.customImage);
  const imageFromDB = useSelector((state) => state.imagesFromDB);
  const blurLevel = useSelector((state) => state.blurLevel);

  function getTheImage() {
    if (!imageFromDB && useCustomImage === true) return null;
    return !useCustomImage ? defaultImage : imageFromDB.image;
  }

  return (
    <MiniaturePreviewContainer
      backgroundImage={getTheImage}
      blurLevel={blurLevel}
    >
      <CentralContainer />
    </MiniaturePreviewContainer>
  );
}
