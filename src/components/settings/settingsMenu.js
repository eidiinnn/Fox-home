import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AmPmFormat from "./options/ampmformat";
import BackgroundImage from "./options/image/imageUpload";
import Colors from "./options/colors";
import Bookmark from "./options/bookmark";
import SupportMe from "./options/supportMe";
import Blur from "./options/blur";
import BorderRadius from "./options/borderRadius";
import Timezone from "./options/timezone";
import BackdropFilterBlur from "./options/backdropFilterBlur";

import { IoIosCloseCircle, IoMdCog } from "react-icons/io";

import {
  ModalDisplay,
  ModalContainer,
  ModalItem,
  OpenSettingsModalIcon,
  CloseIcon,
  DefaultButton,
} from "../../style/settings";

export default function SettingsMenu() {
  const dispatch = useDispatch();
  const borderRadius = useSelector((state) => state.borderRadius);

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
        <ModalContainer borderRadius={borderRadius}>
          <BackgroundImage />
          <Timezone />
          <BackdropFilterBlur />
          <BorderRadius />
          <Blur />
          <Colors />
          <AmPmFormat />
          <Bookmark />

          <ModalItem row noBottomMargin>
            <ModalItem row noBottomMargin noTopMargin>
              <DefaultButton value="Save" onClick={buttonSave}>
                Save
              </DefaultButton>
              <SupportMe />
            </ModalItem>
            <CloseIcon>
              <IoIosCloseCircle onClick={buttonNotSave} />
            </CloseIcon>
          </ModalItem>
        </ModalContainer>
      </ModalDisplay>

      <OpenSettingsModalIcon>
        <IoMdCog onClick={modalAction} />
      </OpenSettingsModalIcon>
    </>
  );
}
