import React from "react";
import CreateHtmlBookmarkList from "./parts/bookmark/createHtmlBookmarkList";
import ClockComponent from "./parts/clockComponent";
import ImageDiv from "../../image/getDivImage";
import { useSelector } from "react-redux";

import {
  MainContainer,
  ClockAndBookmarkContainer,
} from "../../style/centralContainer.js";

export default function CentralContainer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <MainContainer backgroundColor={backgroundColor}>
      <ImageDiv type="image" />
      <ClockAndBookmarkContainer>
        <ClockComponent />
        <CreateHtmlBookmarkList />
      </ClockAndBookmarkContainer>
    </MainContainer>
  );
}
