import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RgbaColorPicker } from "react-colorful";
import {
  ModalItem,
  ModalTitles,
  TwoConfigContainer,
  TwoConfigItem,
  TwoConfigItemTitle,
} from "../../../style/settings";

export default function Colors() {
  const dispatch = useDispatch();
  const backgroundColorFromState = useSelector(
    (state) => state.backgroundColor
  );
  const textIconColorFromState = useSelector((state) => state.textIconColor);

  function convertColorToObject(color) {
    if (!color) color = "rgb(255, 255, 255, 1)";
    const colorArray = color.replace(/[^\d,.%]/g, "").split(",");
    return {
      r: colorArray[0],
      g: colorArray[1],
      b: colorArray[2],
      a: colorArray[3],
    };
  }

  function setColor(color, item, set) {
    const colorString = `rgb(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    dispatch({
      type: "SET_STATE_ITEM",
      item: item,
      value: colorString,
    });
    set(color);
  }

  const [backgroundColor, setBackgroundColor] = useState(
    convertColorToObject(backgroundColorFromState)
  );
  const [iconTextColor, setIconTextColor] = useState(
    convertColorToObject(textIconColorFromState)
  );

  return (
    <ModalItem>
      <ModalTitles>Color</ModalTitles>
      <TwoConfigContainer>
        <TwoConfigItem>
          <TwoConfigItemTitle>Background</TwoConfigItemTitle>
          <RgbaColorPicker
            color={backgroundColor}
            onChange={(color) =>
              setColor(color, "backgroundColor", setBackgroundColor)
            }
          />
        </TwoConfigItem>

        <twoConfigItem>
          <TwoConfigItemTitle>Icons and Clock</TwoConfigItemTitle>
          <RgbaColorPicker
            color={iconTextColor}
            onChange={(color) =>
              setColor(color, "textIconColor", setIconTextColor)
            }
          />
        </twoConfigItem>
      </TwoConfigContainer>
    </ModalItem>
  );
}
