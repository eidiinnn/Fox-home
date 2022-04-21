import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalItem, ModalTitles, DefaultRage } from "../../../style/settings";

export default function BorderRadius() {
  const borderRadius = useSelector((state) => state.borderRadius);
  const dispatch = useDispatch();

  function setBorderRadius(value) {
    dispatch({ type: "BORDER_RADIUS_CHANGE", borderRadius: value });
  }

  return (
    <ModalItem>
      <ModalTitles>Round Corners</ModalTitles>
      <DefaultRage
        type="range"
        step="0.2"
        min="0"
        max="50"
        value={borderRadius}
        onChange={(e) => setBorderRadius(e.target.value)}
      />
    </ModalItem>
  );
}
