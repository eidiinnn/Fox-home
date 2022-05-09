import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalItem, ModalTitles, DefaultRange } from "../../../style/settings";

export default function BackdropFilterBlur() {
  const backdropFilterBlur = useSelector((state) => state.backdropFilterBlur);
  const dispatch = useDispatch();

  function setBorderRadius(value) {
    dispatch({
      type: "SET_STATE_ITEM",
      item: "backdropFilterBlur",
      value: value,
    });
  }

  return (
    <ModalItem>
      <ModalTitles>Clock and Icon Container Blur</ModalTitles>
      <DefaultRange
        type="range"
        step="0.2"
        min="0"
        max="25"
        value={backdropFilterBlur}
        onChange={(e) => setBorderRadius(e.target.value)}
      />
    </ModalItem>
  );
}
