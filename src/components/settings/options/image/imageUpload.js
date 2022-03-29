import React, { useState } from "react";
import CropImage from "./cropImage";
import Resizer from "react-image-file-resizer";
import { ModalItem, ModalTitles } from "../../../../style/settings";

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
  const [image, setImage] = useState(null);

  async function imageUploadOnDone(event) {
    const blobImage = new Blob(event.target.files, { type: "image/png" });
    const resizedImage = await resizeFile(blobImage);
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
