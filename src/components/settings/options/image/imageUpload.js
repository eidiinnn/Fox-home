import React, { useState } from "react";
import CropImage from "./cropImage";
import Resizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  async function imageUploadOnDone(event) {
    const blobImage = new Blob(event.target.files, { type: "image/png" });
    const resizedImage = await resizeFile(blobImage);
    setImage(resizedImage);
  }

  function getimageUrl() {
    return !image ? null : URL.createObjectURL(image);
  }

  function saveImage(cropImage) {
    dispatch({
      type: "IMAGE_CHANGE",
      image: image,
      cropImage: cropImage,
    });

    setImage(null);
    document.getElementById("uploadInput").value = null;
  }

  return (
    <ModalItem>
      <ModalTitles>Image</ModalTitles>
      <input
        id="uploadInput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageUploadOnDone}
      />

      <CropImage imageToCrop={getimageUrl()} onSave={saveImage} />
    </ModalItem>
  );
}
