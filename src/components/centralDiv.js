import React from "react";
import { Component } from "react";
import CreateHtmlBookmarkList from "./tools/createHtmlBookmarkList";
import ClockComponent from "./tools/clockComponent";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
} from "../style";

const image = localStorage.getItem("image");

export default class CentralDiv extends Component {
  render() {
    return (
      <CentralDivContainer>
        <CentralDivImage src={image} />
        <CentralDivClockAndFavorites>
          <ClockComponent />
          <CreateHtmlBookmarkList />
        </CentralDivClockAndFavorites>
      </CentralDivContainer>
    );
  }
}
