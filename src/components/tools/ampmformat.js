import React from "react";
import { Component } from "react";
import Switch from "@mui/material/Switch";

import { SettingsModalItems, SettingsModalTitles } from "../../style";

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
      <SettingsModalItems vertical>
        <SettingsModalTitles>Use AM PM time format</SettingsModalTitles>
        <Switch
          id="AmPmSwitch"
          checked={this.state.AmPm}
          onChange={this.AmPmSwitchOnChange}
        />
      </SettingsModalItems>
    );
  }
}
