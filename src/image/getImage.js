import React, { useState } from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { useSelector } from "react-redux";
import { CentralContainerImage, BackgroundImage } from "../style/image";
import defaultImage from "./defaultImage.jpg";
import { getImageTest } from "./dbFunctions";

const db = new Dexie("imageDB");
db.version(2).stores({
  itens: "primaryKey, image, cropImage",
});

export default function GetImage(props) {
  const useCustomImage = useSelector((state) => state.customImage);
  const blurLevel = useSelector((state) => state.blurLevel);
  const indexedDBImage = useLiveQuery(async () => {
    const dbArray = await db.itens.where({ primaryKey: "using" }).toArray();
    return dbArray.length === 0 ? null : dbArray[0];
  });

  if (!indexedDBImage && useCustomImage === true) return null;

  function selectImage() {
    return !useCustomImage
      ? {
          background: defaultImage,
          CentralContainerImage: defaultImage,
        }
      : {
          background: URL.createObjectURL(indexedDBImage.image),
          CentralContainerImage: indexedDBImage.cropImage,
        };
  }

  function showImage(type) {
    const image = selectImage();

    switch (type) {
      case "image":
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
