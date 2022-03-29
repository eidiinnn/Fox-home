import React, { useState } from "react";
import CropImage from "./cropImage";
import Resizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
import { ModalItem, ModalTitles } from "../../../style/settings";

function resizeFile(file) {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      1280,
      720,
      "PNG",
      50,
      0,
      (uri) => {
        resolve(uri);
      },
      "blob"
    );
  });
}

export default function BackgroundImage() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  async function imageUploadOnDone(event) {
    const blobImage = new Blob(event.target.files, { type: "image/png" });
    const resizedImage = await resizeFile(blobImage);
    dispatch({ type: "IMAGE_CHANGE", image: resizedImage });
    setImage(resizedImage);
  }

  return (
    <ModalItem>
      <ModalTitles>Background Image</ModalTitles>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageUploadOnDone}
      />

      <CropImage imageToCrop={image} />
    </ModalItem>
  );
}
