import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";

export default function CropImage(props) {
  const image = props.imageToCrop;
  const [imageEvent, setImageEvent] = useState(null);
  const [imageCrop, setImageCrop] = useState(null);

  if (!image) return null;

  function onClickButton() {
    setImageCrop(imageEvent.getImageScaledToCanvas().toDataURL());
  }

  return (
    <>
      <AvatarEditor
        image={URL.createObjectURL(image)}
        width={300}
        height={350}
        border={50}
        color={[255, 255, 255, 0.6]}
        scale={1.2}
        rotate={0}
        ref={setImageEvent}
      />

      <button onClick={onClickButton}>Save</button>

      <img src={imageCrop} alt="cropped" />
    </>
  );
}
