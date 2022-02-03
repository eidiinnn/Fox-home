import React from "react";
import { Component } from "react";
import Clock from "react-live-clock";

import CentralDivImageBackground from "../images/CentralDivImageBackground.jpg";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
  CentralDivClock,
} from "../style";

export default class CentralDiv extends Component {
  render() {
    const timer = new Date();
    return (
      <CentralDivContainer>
        <CentralDivImage src={CentralDivImageBackground} />
        <CentralDivClockAndFavorites>
          <CentralDivClock>
            <Clock format={"HH:mm"} ticking={true} />
          </CentralDivClock>
        </CentralDivClockAndFavorites>
      </CentralDivContainer>
    );
  }
}
