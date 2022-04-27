import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalItem, ModalTitles, DefaultRange } from "../../../style/settings";

export default function Blur() {
  const blur = useSelector((state) => state.blurLevel);
  const dispatch = useDispatch();

  function setBlurValue(value) {
    dispatch({ type: "SET_STATE_ITEM", item: "blurLevel", value: value });
  }

  return (
    <ModalItem>
      <ModalTitles>Background Blur</ModalTitles>
      <DefaultRange
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
