import React, { useState } from "react";
import CropImage from "./cropImage";
import Resizer from "react-image-file-resizer";
import { useDispatch } from "react-redux";
import { ModalItem, ModalTitles, Upload } from "../../../../style/settings";

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
      type: "SET_STATE_ITEM",
      item: "imagesFromDB",
      value: {
        image: URL.createObjectURL(image),
        cropImage: URL.createObjectURL(cropImage),
        blobImage: { image: image, cropImage: cropImage },
      },
    });
    dispatch({ type: "SET_STATE_ITEM", item: "customImage", value: true });
    setImage(null);
    document.getElementById("uploadInput").value = null;
  }

  return (
    <ModalItem>
      <ModalTitles>Image</ModalTitles>
      <Upload
        id="uploadInput"
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageUploadOnDone}
      />

      <CropImage imageToCrop={getimageUrl()} onSave={saveImage} />
    </ModalItem>
  );
}
