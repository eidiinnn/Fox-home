import React from "react";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundImage() {
  const dispatch = useDispatch();

  function imageUploadOnDone(event) {
    dispatch({ type: "IMAGE_CHANGE", image: event.base64 });
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Background Image</SettingsModalTitles>
      <FileBase64 type="file" multiple={false} onDone={imageUploadOnDone} />
    </SettingsModalItems>
  );
}
