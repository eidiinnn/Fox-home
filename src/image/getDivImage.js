import React from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { useSelector } from "react-redux";
import { CentralDivImage, BackgroundDiv } from "../style";
import defaultImage from "./defaultImage.jpg";

const db = new Dexie("imageDB");
db.version(1).stores({
  item: "image, value",
});

export default function ImageDiv(props) {
  const useCustomImage = useSelector((state) => state.customImage);
  const indexedDBImage = useLiveQuery(async () => {
    const dbArray = await db.item.where({ image: "default" }).toArray();
    return dbArray.length === 0 ? null : dbArray[0];
  });

  if (!indexedDBImage && useCustomImage === true) return null;

  function selectImage() {
    const imageToBeUsed = !useCustomImage ? defaultImage : indexedDBImage.value;
    return !useCustomImage ? imageToBeUsed : URL.createObjectURL(imageToBeUsed);
  }

  function showImage(type) {
    const image = selectImage();
    if (type === "image") return <CentralDivImage src={image} />;
    if (type === "background") return <BackgroundDiv image={image} />;
  }

  return <>{showImage(props.type)}</>;
}
