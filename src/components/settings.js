import React from "react";
import { Component } from "react";
import AmPmFormat from "./tools/ampmformat";
import ImageUpload from "./tools/imageUpload";

import { FaCog, FaRegTimesCircle } from "react-icons/fa";
import { SettingsModal, SettingsModalContainer } from "../style";

export default class Settings extends Component {
  buttonSaveAction = () => {
    window.location.reload();
  };

  modalOpen = () => this.setState({ modalOpen: true });
  modalClose = () => this.setState({ modalOpen: false });

  state = {
    modalOpen: false,
  };

  render() {
    return (
      <>
        <SettingsModal show={this.state.modalOpen}>
          <SettingsModalContainer>
            <AmPmFormat />
            <ImageUpload />
            <button value="Save" onClick={this.buttonSaveAction}>
              Save
            </button>
            <FaRegTimesCircle onClick={this.modalClose} />
          </SettingsModalContainer>
        </SettingsModal>

        <FaCog onClick={this.modalOpen} />
      </>
    );
  }
}
