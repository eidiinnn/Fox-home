import React from "react";
import CreateHtmlBookmarkList from "./parts/bookmark/createHtmlBookmarkList";
import ClockComponent from "./parts/clockComponent";
import { useSelector } from "react-redux";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
} from "../../style";

export default function ClockBookmarkContainer() {
  const image = useSelector((state) => state.image);
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <CentralDivContainer backgroundColor={backgroundColor}>
      <CentralDivImage src={image} />
      <CentralDivClockAndFavorites>
        <ClockComponent />
        <CreateHtmlBookmarkList />
      </CentralDivClockAndFavorites>
    </CentralDivContainer>
  );
}
