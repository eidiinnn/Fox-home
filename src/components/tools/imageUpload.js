import React from "react";
import { Component } from "react";
import FileBase64 from "react-file-base64";

export default class ImageUpload extends Component {
  imageUploadOnDone = (event) => {
    localStorage.setItem("image", event.base64);
  };

  render() {
    return (
      <>
        <FileBase64
          type="file"
          multiple={false}
          onDone={this.imageUploadOnDone}
        />
      </>
    );
  }
}
