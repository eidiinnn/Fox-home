import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AmPmFormat from "./options/ampmformat";
import BackgroundImage from "./options/image/imageUpload";
import Colors from "./options/colors";
import Bookmark from "./options/bookmark";
import SupportMe from "./options/supportMe";
import Timezone from "./options/timezone";
import RangeOptions from "./options/rangeOptions";

import Preview from "./preview";

import { IoIosCloseCircle, IoMdCog } from "react-icons/io";

import {
  ModalDisplay,
  ModalContainer,
  ModalItem,
  OpenSettingsModalIcon,
  CloseIcon,
  DefaultButton,
  OptionsContainer,
  SaveDiscardContainer,
} from "../../style/settings";

export default function SettingsMenu() {
  const dispatch = useDispatch();
  const borderRadius = useSelector((state) => state.borderRadius);
  const textIconColor = useSelector((state) => state.textIconColor);

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
          <OptionsContainer>
            <BackgroundImage />
            <Timezone />
            <RangeOptions />
            <Colors />
            <AmPmFormat />
            <Bookmark />
          </OptionsContainer>

          <SaveDiscardContainer>
            <ModalItem row noBottomMargin noTopMargin>
              <DefaultButton value="Save" onClick={buttonSave}>
                Save
              </DefaultButton>
              <SupportMe />
            </ModalItem>
            <CloseIcon>
              <IoIosCloseCircle onClick={buttonNotSave} />
            </CloseIcon>
          </SaveDiscardContainer>
        </ModalContainer>
        <Preview />
      </ModalDisplay>

      <OpenSettingsModalIcon color={textIconColor}>
        <IoMdCog onClick={modalAction} />
      </OpenSettingsModalIcon>
    </>
  );
}
