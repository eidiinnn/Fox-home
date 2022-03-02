import React from "react";
import { useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundImage() {
  const dispatch = useDispatch();

  const resizeFile = (file) =>
    new Promise((resolve) => {
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

  async function imageUploadOnDone(event) {
    const blobImage = new Blob(event.target.files, { type: "image/png" });
    const resizedImage = await resizeFile(blobImage);
    dispatch({
      type: "IMAGE_CHANGE",
      image: resizedImage,
    });
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Background Image</SettingsModalTitles>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={imageUploadOnDone}
      />
    </SettingsModalItems>
  );
}
