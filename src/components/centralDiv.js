import React from "react";
import { Component } from "react";
import CreateHtmlBookmarkList from "./tools/createHtmlBookmarkList";
import ClockComponent from "./tools/clockComponent";
import defaultImage from "../images/image.jpg";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
} from "../style";

export default class CentralDiv extends Component {
  componentDidMount = () => {
    const image = localStorage.getItem("image");
    if (image !== null) this.setState({ image: image });
  };

  state = {
    image: defaultImage,
  };

  render() {
    return (
      <CentralDivContainer>
        <CentralDivImage src={this.state.image} />
        <CentralDivClockAndFavorites>
          <ClockComponent />
          <CreateHtmlBookmarkList />
        </CentralDivClockAndFavorites>
      </CentralDivContainer>
    );
  }
}
