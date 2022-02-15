import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AmPmFormat from "./options/ampmformat";
import BackgroundImage from "./options/backgroundImage";
import BackgroundColor from "./options/backgroundColor";
import Bookmark from "./options/bookmark";

import { FaCog, FaRegTimesCircle } from "react-icons/fa";

import {
  SettingsModal,
  SettingsModalContainer,
  SettingsModalItems,
  SettingsIconContainer,
  SaveButton,
  NotSaveIconContainer,
} from "../../style";

export default function SettingsMenu() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.backgroundColor);

  function buttonSave() {
    dispatch({ type: "SAVE_SETTINGS" });
    modalAction();
  }
  function buttonNotSave() {
    dispatch({ type: "DISCARD_SETTINGS" });
    modalAction();
  }

  const [modalShow, setModalShow] = useState(false);
  function modalAction() {
    setModalShow(!modalShow);
  }

  return (
    <>
      <SettingsModal show={modalShow}>
        <SettingsModalContainer backgroundColor={backgroundColor}>
          <BackgroundImage />
          <AmPmFormat />
          <BackgroundColor />
          <Bookmark />
          <SettingsModalItems vertical noBottomMargin>
            <SettingsModalItems vertical>
              <SaveButton value="Save" onClick={buttonSave}>
                Save
              </SaveButton>
            </SettingsModalItems>
            <NotSaveIconContainer>
              <FaRegTimesCircle onClick={buttonNotSave} />
            </NotSaveIconContainer>
          </SettingsModalItems>
        </SettingsModalContainer>
      </SettingsModal>

      <SettingsIconContainer>
        <FaCog onClick={modalAction} />
      </SettingsIconContainer>
    </>
  );
}
