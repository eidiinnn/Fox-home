import React from "react";
import { Component } from "react";
import CreateHtmlBookmarkList from "./tools/createHtmlBookmarkList";
import ClockComponent from "./tools/clockComponent";

import image from "../images/image.jpg";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
} from "../style";

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
