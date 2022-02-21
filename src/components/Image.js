import React from "react";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import store from "../redux/store";
import { useSelector } from "react-redux";

import image from "../images/image.jpg";
import { CentralDivImage, BackgroundDiv } from "../style";

const db = new Dexie("imageDB");
db.version(1).stores({
  item: "image, value",
});

export default function Image(props) {
  const willUseTheIndexedImage = useSelector((state) => state.customImage);
  const indexedDBImage = useLiveQuery(async () => {
    const dbArray = await db.item.where({ image: "default" }).toArray();
    if (dbArray.length === 0) return null;
    else return dbArray;
  });

  if (!indexedDBImage && willUseTheIndexedImage === true) return null;
  const imageToBeUsed = !willUseTheIndexedImage
    ? image
    : indexedDBImage[0].value;

  function showImage(type) {
    const image = !willUseTheIndexedImage
      ? imageToBeUsed
      : URL.createObjectURL(imageToBeUsed);
    if (type === "image") return <CentralDivImage src={image} />;
    if (type === "background") return <BackgroundDiv image={image} />;
    return null;
  }

  return <>{showImage(props.type)}</>;
}

export async function uploadImage(value) {
  const setOld = await db.item.get("default");
  if (setOld !== undefined) db.item.put({ image: "old", value: setOld.value });

  await db.item.put({ image: "default", value: value });
  store.dispatch({ type: "CUSTOM_IMAGE_CHANGE" });
}

export async function setOldImageToDefault() {
  const setDefault = await db.item.get("old");
  if (!setDefault) return null;

  db.item.put({ image: "default", value: setDefault.value });
  removeOldTable();
}

export async function removeOldTable() {
  db.item.delete("old");
}
