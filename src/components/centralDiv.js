import React from "react";
import { Component } from "react";
import Clock from "react-live-clock";
import CreateHtmlBookmarkList from "./tools/createHtmlBookmarkList";

import image from "../images/image.jpg";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
  CentralDivClock,
} from "../style";

export default class CentralDiv extends Component {
  render() {
    return (
      <CentralDivContainer>
        <CentralDivImage src={image} />
        <CentralDivClockAndFavorites>
          <CentralDivClock>
            <Clock format={"HH:mm"} ticking={true} />
          </CentralDivClock>
          <CreateHtmlBookmarkList />
        </CentralDivClockAndFavorites>
      </CentralDivContainer>
    );
  }
}
