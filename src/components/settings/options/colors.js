import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { HexColorInput, HexColorPicker } from "react-colorful";

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
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const textIconColor = useSelector((state) => state.textIconColor);

  function setColor(color, item) {
    dispatch({
      type: "SET_STATE_ITEM",
      item: item,
      value: color,
    });
  }

  return (
    <ModalItem>
      <ModalTitles>Color</ModalTitles>
      <TwoConfigContainer>
        <TwoConfigItem>
          <TwoConfigItemTitle>Background</TwoConfigItemTitle>
          <HexColorPicker
            color={backgroundColor}
            onChange={(color) => setColor(color, "backgroundColor")}
          />

          <HexInputContainer>
            <HexColorInput
              color={backgroundColor}
              onChange={(color) => setColor(color, "backgroundColor")}
            />
          </HexInputContainer>
        </TwoConfigItem>

        <TwoConfigItem>
          <TwoConfigItemTitle>Icons and Clock</TwoConfigItemTitle>
          <HexColorPicker
            placeholder="Hex Color"
            color={textIconColor}
            onChange={(color) => setColor(color, "textIconColor")}
          />

          <HexInputContainer>
            <HexColorInput
              placeholder="Hex Color"
              color={textIconColor}
              onChange={(color) => setColor(color, "textIconColor")}
            />
          </HexInputContainer>
        </TwoConfigItem>
      </TwoConfigContainer>
    </ModalItem>
  );
}
