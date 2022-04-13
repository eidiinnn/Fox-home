import React from "react";
import BookmarkList from "./parts/bookmark/BookmarkList";
import ClockComponent from "./parts/clockComponent";
import GetImage from "../../image/getImage";
import { useSelector } from "react-redux";

import {
  MainContainer,
  ClockAndBookmarkContainer,
} from "../../style/centralContainer.js";

export default function CentralContainer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);
  const borderRadius = useSelector((state) => state.borderRadius);

  return (
    <MainContainer
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      <GetImage type="centralDivImage" />
      <ClockAndBookmarkContainer>
        <ClockComponent />
        <BookmarkList />
      </ClockAndBookmarkContainer>
    </MainContainer>
  );
}
