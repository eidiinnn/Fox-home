import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AmPmFormat from "./options/ampmformat";
import BackgroundImage from "./options/backgroundImage";
import BackgroundColor from "./options/backgroundColor";
import Bookmark from "./options/bookmark";
import SupportMe from "./options/supportMe";

import { FaCog, FaRegTimesCircle } from "react-icons/fa";

import {
  ModalDisplay,
  ModalContainer,
  ModalItem,
  OpenSettingsModalIcon,
  SaveButton,
  CloseIcon,
} from "../../style/settings";

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
      <ModalDisplay show={modalShow}>
        <ModalContainer backgroundColor={backgroundColor}>
          <BackgroundImage />
          <AmPmFormat />
          <BackgroundColor />
          <Bookmark />

          <ModalItem row noBottomMargin>
            <ModalItem row noBottomMargin noTopMargin>
              <SaveButton value="Save" onClick={buttonSave}>
                Save
              </SaveButton>
              <SupportMe />
            </ModalItem>
            <CloseIcon>
              <FaRegTimesCircle onClick={buttonNotSave} />
            </CloseIcon>
          </ModalItem>
        </ModalContainer>
      </ModalDisplay>

      <OpenSettingsModalIcon>
        <FaCog onClick={modalAction} />
      </OpenSettingsModalIcon>
    </>
  );
}
