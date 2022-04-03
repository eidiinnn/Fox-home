import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

import { FaRegImage } from "react-icons/fa";
import {
  CropImageContainer,
  CropImageButton,
  CropImageRangeContainer,
  CropImageRage,
} from "../../../../style/settings";

export default function CropImage(props) {
  const image = props.imageToCrop;
  const [imageEvent, setImageEvent] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  if (!image) return null;

  function onClickButton() {
    props.onSave(imageEvent.getImageScaledToCanvas().toDataURL());
  }

  return (
    <CropImageContainer>
      <AvatarEditor
        image={image}
        width={300}
        height={350}
        border={50}
        position={position}
        onPositionChange={setPosition}
        color={[0, 0, 0, 0.65]}
        scale={scale}
        rotate={0}
        ref={setImageEvent}
      />

      <CropImageRangeContainer>
        <FaRegImage />
        <CropImageRage
          type="range"
          min="1"
          max="3"
          step="0.01"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        />
        <FaRegImage style={{ fontSize: "2rem" }} />
      </CropImageRangeContainer>
      <CropImageButton onClick={onClickButton}>Crop</CropImageButton>
    </CropImageContainer>
  );
}
