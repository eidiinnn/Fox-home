import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RgbaColorPicker } from "react-colorful";

import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function BackgroundColor() {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.backgroundColor);

  function convertColorToObject() {
    const colorArray = color.match(/\d+/g);
    return {
      r: colorArray[0],
      g: colorArray[1],
      b: colorArray[2],
      a: colorArray[3],
    };
  }
  const [colorObject, setColorObject] = useState(convertColorToObject());

  function setColor(colorChoice) {
    dispatch({
      type: "BACKGROUND_COLOR_CHANGE",
      color: `rgb(${colorChoice.r}, ${colorChoice.g}, ${colorChoice.b}, ${colorChoice.a})`,
    });
    setColorObject(colorChoice);
  }

  return (
    <SettingsModalItems>
      <SettingsModalTitles>Background Color</SettingsModalTitles>
      <RgbaColorPicker color={colorObject} onChange={setColor} />
    </SettingsModalItems>
  );
}
