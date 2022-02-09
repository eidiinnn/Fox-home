import React from "react";
import { Component } from "react";
import Clock from "react-live-clock";
import { AmPmFormat } from "../../settings";

import { CentralDivClock } from "../../style";

export default class ClockComponent extends Component {
  componentDidMount = () => {
    if (AmPmFormat === true)
      return this.setState({
        format: "hh:mm A",
        fontSize: "6em",
        mediaFontSize: "10.9vw",
      });

    return this.setState({
      format: "HH:mm",
      fontSize: "10em",
      mediaFontSize: "15vw",
    });
  };

  state = {
    format: null,
    fontSize: null,
    mediaFontSize: null,
  };

  render() {
    const { format, fontSize, mediaFontSize } = this.state;
    if (!format) return null;
    return (
      <CentralDivClock fontSize={fontSize} mediaFontSize={mediaFontSize}>
        <Clock format={format} ticking={true} />
      </CentralDivClock>
    );
  }
}
