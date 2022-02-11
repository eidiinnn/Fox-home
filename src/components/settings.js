import React from "react";
import { Component } from "react";
import AmPmFormat from "./tools/ampmformat";
import ImageUpload from "./tools/imageUpload";
import BackgroundColor from "./tools/backgroundColor";

import { FaCog, FaRegTimesCircle } from "react-icons/fa";
import {
  SettingsModal,
  SettingsModalContainer,
  SettingsModalItems,
  SettingsIconContainer,
} from "../style";

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
            <ImageUpload />
            <AmPmFormat />
            <BackgroundColor />
            <SettingsModalItems vertical>
              <button value="Save" onClick={this.buttonSaveAction}>
                Save
              </button>
              <FaRegTimesCircle onClick={this.modalClose} />
            </SettingsModalItems>
          </SettingsModalContainer>
        </SettingsModal>

        <SettingsIconContainer>
          <FaCog onClick={this.modalOpen} />
        </SettingsIconContainer>
      </>
    );
  }
}
