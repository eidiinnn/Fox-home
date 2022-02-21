import React from "react";
import { useDispatch } from "react-redux";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundImage() {
  const dispatch = useDispatch();

  function imageUploadOnDone(event) {
    const blobImage = new Blob(event.target.files, { type: "image/png" });
    dispatch({
      type: "IMAGE_CHANGE",
      image: blobImage,
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
