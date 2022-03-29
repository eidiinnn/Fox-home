import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { useDispatch } from "react-redux";

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
    </>
  );
}
