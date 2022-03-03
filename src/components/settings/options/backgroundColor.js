import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RgbaColorPicker } from "react-colorful";
import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundColor() {
  const dispatch = useDispatch();
  const savedColor = useSelector((state) => state.backgroundColor);

  function convertColorToObject() {
    const colorArray = savedColor.replace(/[^\d,.%]/g, "").split(",");
    return {
      r: colorArray[0],
      g: colorArray[1],
      b: colorArray[2],
      a: colorArray[3],
    };
  }

  function setColor(colorChoice) {
    const colorString = `rgb(${colorChoice.r}, ${colorChoice.g}, ${colorChoice.b}, ${colorChoice.a})`;
    dispatch({ type: "BACKGROUND_COLOR_CHANGE", color: colorString });
    setColorObject(colorChoice);
  }

  const [colorObject, setColorObject] = useState(convertColorToObject());

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Background Color</SettingsModalTitles>
      <RgbaColorPicker color={colorObject} onChange={setColor} />
    </SettingsModalItems>
  );
}
