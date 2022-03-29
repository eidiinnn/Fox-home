import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDispatch } from "react-redux";

import {
  CropImageContainer,
  CropImageButton,
} from "../../../../style/settings";

export default function CropImage(props) {
  const image = props.imageToCrop;
  const [imageEvent, setImageEvent] = useState(null);
  const dispatch = useDispatch();

  if (!image) return null;

  function onClickButton() {
    dispatch({
      type: "IMAGE_CHANGE",
      image: image,
      cropImage: imageEvent.getImageScaledToCanvas().toDataURL(),
    });
  }

  return (
    <CropImageContainer>
      <AvatarEditor
        image={URL.createObjectURL(image)}
        width={300}
        height={350}
        border={50}
        color={[0, 0, 0, 0.65]}
        scale={1.2}
        rotate={0}
        ref={setImageEvent}
      />

      <CropImageButton onClick={onClickButton}>Save</CropImageButton>
    </CropImageContainer>
  );
}
