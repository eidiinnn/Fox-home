import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalItem, ModalTitles, DefaultRange } from "../../../style/settings";

export default function BackgroundColorOpacity() {
  const borderRadius = useSelector((state) => state.backgroundColorOpacity);
  const dispatch = useDispatch();

  function setBackgroundColorOpacity(value) {
    dispatch({
      type: "SET_STATE_ITEM",
      item: "backgroundColorOpacity",
      value: value,
    });
  }

  return (
    <ModalItem>
      <ModalTitles>Clock and Icon Container Opacity</ModalTitles>
      <DefaultRange
        type="range"
        step="0.1"
        min="0"
        max="1"
        value={borderRadius}
        onChange={(e) => setBackgroundColorOpacity(e.target.value)}
      />
    </ModalItem>
  );
}
