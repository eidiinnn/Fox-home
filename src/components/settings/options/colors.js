import React from "react";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RgbaColorPicker, HexColorInput } from "react-colorful";
import { colord } from "colord";

import {
  ModalItem,
  ModalTitles,
  TwoConfigContainer,
  TwoConfigItem,
  TwoConfigItemTitle,
  HexInputContainer,
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

  function inputOnchange(color, item, set) {
    const colorInRgba = colord(color).toRgbString();
    const objectColor = convertColorToObject(colorInRgba);
    objectColor.a = 1;
    setColor(objectColor, item, set);
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

          <HexInputContainer>
            <HexColorInput
              placeholder="Hex color"
              onChange={(color) =>
                inputOnchange(color, "backgroundColor", setBackgroundColor)
              }
            />
          </HexInputContainer>
        </TwoConfigItem>

        <TwoConfigItem>
          <TwoConfigItemTitle>Icons and Clock</TwoConfigItemTitle>
          <RgbaColorPicker
            color={iconTextColor}
            onChange={(color) =>
              setColor(color, "textIconColor", setIconTextColor)
            }
          />

          <HexInputContainer>
            <HexColorInput
              placeholder="Hex color"
              onChange={(color) =>
                inputOnchange(color, "textIconColor", setIconTextColor)
              }
            />
          </HexInputContainer>
        </TwoConfigItem>
      </TwoConfigContainer>
    </ModalItem>
  );
}
