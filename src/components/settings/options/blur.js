import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalItem, ModalTitles } from "../../../style/settings";

export default function Blur() {
  const blur = useSelector((state) => state.blurLevel);
  const dispatch = useDispatch();

  function setBlurValue(value) {
    dispatch({ type: "BLUR_LEVEL_CHANGE", blurLevel: value });
  }

  return (
    <ModalItem>
      <ModalTitles>Background Blur</ModalTitles>
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={blur}
        onChange={(e) => setBlurValue(e.target.value)}
      />
    </ModalItem>
  );
}
