import React from "react";
import { Component } from "react";
import CreateHtmlBookmarkList from "./parts/bookmark/createHtmlBookmarkList";
import ClockComponent from "./parts/clockComponent";
import defaultImage from "../../images/image.jpg";

import {
  CentralDivContainer,
  CentralDivImage,
  CentralDivClockAndFavorites,
} from "../../style";

export default class ClockBookmarkContainer extends Component {
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
