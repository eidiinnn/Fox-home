import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HexColorPicker } from "react-colorful";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundColor() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.backgroundColor);

  function setColor(colorChoice) {
    dispatch({ type: "BACKGROUND_COLOR_CHANGE", color: colorChoice });
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Background Color</SettingsModalTitles>
      <HexColorPicker color={color} onChange={setColor} />
    </SettingsModalItems>
  );
}
