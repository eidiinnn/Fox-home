import React from "react";
import { Component } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

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
      <>
        <HexColorPicker color={this.state.color} onChange={this.setColor} />
        <HexColorInput color={this.state.color} onChange={this.setColor} />
      </>
    );
  }
}
