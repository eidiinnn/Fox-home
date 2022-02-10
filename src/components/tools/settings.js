import React from "react";
import { Component } from "react";
import Switch from "@mui/material/Switch";
import { FaCog, FaRegTimesCircle } from "react-icons/fa";

import { SettingsModal, SettingsModalContainer } from "../../style";

export default class Settings extends Component {
  componentDidMount = () => {
    if (!JSON.parse(localStorage.getItem("haveConfigSet"))) {
      localStorage.setItem("haveConfigSet", true);
      localStorage.setItem("AmPm", false);
    }
    this.getAllValues();
  };

  getAllValues = () => {
    this.setState({
      AmPm: JSON.parse(localStorage.getItem("AmPm")),
    });
  };

  buttonSaveAction = () => {
    localStorage.setItem("AmPm", this.state.AmPm);
    window.location.reload();
  };

  modalOpen = () => this.setState({ modalOpen: true });
  modalClose = () => {
    this.setState({ modalOpen: false });
    this.getAllValues();
  };

  AmPmSwitchOnChange = () => {
    const change = this.state.AmPm === true ? false : true;
    this.setState({ AmPm: change });
  };

  state = {
    modalOpen: false,
    AmPm: false,
  };

  render() {
    const { AmPm, modalOpen } = this.state;
    return (
      <>
        <SettingsModal show={modalOpen}>
          <SettingsModalContainer>
            <form id="form" action={this.formAction}>
              <label>Use AM PM time format</label>
              <Switch
                id="AmPmSwitch"
                checked={AmPm}
                onChange={this.AmPmSwitchOnChange}
              />
              <button value="Save" onClick={this.buttonSaveAction}>
                Save
              </button>
            </form>
            <FaRegTimesCircle onClick={this.modalClose} />
          </SettingsModalContainer>
        </SettingsModal>

        <FaCog onClick={this.modalOpen} />
      </>
    );
  }
}
