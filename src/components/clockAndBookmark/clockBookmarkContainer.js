import React from "react";
import CreateHtmlBookmarkList from "./parts/bookmark/createHtmlBookmarkList";
import ClockComponent from "./parts/clockComponent";
import Image from "../Image";
import { useSelector } from "react-redux";

import { CentralDivContainer, CentralDivClockAndFavorites } from "../../style";

export default function ClockBookmarkContainer() {
  const backgroundColor = useSelector((state) => state.backgroundColor);

  return (
    <CentralDivContainer backgroundColor={backgroundColor}>
      <Image type="image" />
      <CentralDivClockAndFavorites>
        <ClockComponent />
        <CreateHtmlBookmarkList />
      </CentralDivClockAndFavorites>
    </CentralDivContainer>
  );
}
