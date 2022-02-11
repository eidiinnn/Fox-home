import React from "react";
import { Component } from "react";
import Switch from "@mui/material/Switch";

export default class AmPmFormat extends Component {
  componentDidMount = () => {
    this.setState({ AmPm: JSON.parse(localStorage.getItem("AmPm")) });
  };

  AmPmSwitchOnChange = () => {
    const change = this.state.AmPm === true ? false : true;
    this.setState({ AmPm: change });
    localStorage.setItem("AmPm", change);
  };

  state = {
    AmPm: false,
  };

  render() {
    return (
      <>
        <label>Use AM PM time format</label>
        <Switch
          id="AmPmSwitch"
          checked={this.state.AmPm}
          onChange={this.AmPmSwitchOnChange}
        />
      </>
    );
  }
}
