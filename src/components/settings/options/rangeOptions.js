import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalItem, ModalTitles, DefaultRange } from "../../../style/settings";

export default function BorderRadius() {
  const dispatch = useDispatch();

  function setBorderRadius(value, stateName) {
    dispatch({ type: "SET_STATE_ITEM", item: stateName, value: value });
  }

  const options = [
    {
      title: "Container Corners",
      step: "0.2",
      min: "0",
      max: "50",
      state: useSelector((state) => state.borderRadius),
      setState: "borderRadius",
    },
    {
      title: "Background Blur",
      step: "0.1",
      min: "0",
      max: "10",
      state: useSelector((state) => state.blurLevel),
      setState: "blurLevel",
    },
    {
      title: "Container Opacity",
      step: "0.05",
      min: "0",
      max: "1",
      state: useSelector((state) => state.backgroundColorOpacity),
      setState: "backgroundColorOpacity",
    },
    {
      title: "Container Blur",
      step: "0.05",
      min: "0",
      max: "25",
      state: useSelector((state) => state.backdropFilterBlur),
      setState: "backdropFilterBlur",
    },
  ];

  return (
    <>
      {options.map((option) => {
        return (
          <ModalItem row noTopMargin noBottomMargin>
            <ModalTitles small>{option.title}</ModalTitles>
            <DefaultRange
              type="range"
              step={option.step}
              min={option.min}
              max={option.max}
              value={option.state}
              onChange={(e) => setBorderRadius(e.target.value, option.setState)}
            />
          </ModalItem>
        );
      })}
    </>
  );
}
