import React from "react";
import BookmarkList from "./parts/bookmark/BookmarkList";
import ClockComponent from "./parts/clockComponent";
import GetImage from "../../image/getImage";
import { useSelector } from "react-redux";
import { colord } from "colord";

import {
  MainContainer,
  ClockAndBookmarkContainer,
} from "../../style/centralContainer.js";

export default function CentralContainer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const backgroundColorOpacity = useSelector(
    (state) => state.backgroundColorOpacity
  );

  const borderRadius = useSelector((state) => state.borderRadius);
  const textIconColor = useSelector((state) => state.textIconColor);
  const backdropFilterBlur = useSelector((state) => state.backdropFilterBlur);

  function getRgbaOrHex(color) {
    return !backgroundColorOpacity
      ? backgroundColor
      : colord(backgroundColor)
          .alpha(Number(backgroundColorOpacity))
          .toRgbString();
  }

  return (
    <MainContainer
      backgroundColor={getRgbaOrHex}
      borderRadius={borderRadius}
      textIconColor={textIconColor}
      backdropFilterBlur={backdropFilterBlur}
    >
      <GetImage type="centralDivImage" />
      <ClockAndBookmarkContainer>
        <ClockComponent />
        <BookmarkList />
      </ClockAndBookmarkContainer>
    </MainContainer>
  );
}
