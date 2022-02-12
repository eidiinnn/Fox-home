import React from "react";
import { Component } from "react";
import FileBase64 from "react-file-base64";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default class BackgroundImage extends Component {
  imageUploadOnDone = (event) => {
    localStorage.setItem("image", event.base64);
  };

  render() {
    return (
      <SettingsModalItems>
        <SettingsModalTitles>Background Image</SettingsModalTitles>
        <FileBase64
          type="file"
          multiple={false}
          onDone={this.imageUploadOnDone}
        />
      </SettingsModalItems>
    );
  }
}
