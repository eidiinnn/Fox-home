import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RgbaColorPicker } from "react-colorful";
import { ModalItem, ModalTitles } from "../../../style/settings";

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
    dispatch({
      type: "SET_STATE_ITEM",
      item: "backgroundColor",
      value: colorString,
    });
    setColorObject(colorChoice);
  }

  const [colorObject, setColorObject] = useState(convertColorToObject());

  return (
    <ModalItem>
      <ModalTitles>Background Color</ModalTitles>
      <RgbaColorPicker color={colorObject} onChange={setColor} />
    </ModalItem>
  );
}
