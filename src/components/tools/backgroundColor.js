import React from "react";
import { Component } from "react";
import { HexColorPicker } from "react-colorful";

import { SettingsModalItems, SettingsModalTitles } from "../../style";

export default class BackgroundColor extends Component {
  componentDidMount = () => {
    const color = localStorage.getItem("backgroundColor");
    if (color !== null) this.setState({ color: color });
  };

  setColor = (colorChoice) => {
    this.setState({ color: colorChoice });
    localStorage.setItem("backgroundColor", colorChoice);
  };

  state = {
    color: "#110c19",
  };

  render() {
    return (
      <SettingsModalItems>
        <SettingsModalTitles>Background Color</SettingsModalTitles>
        <HexColorPicker color={this.state.color} onChange={this.setColor} />
      </SettingsModalItems>
    );
  }
}
