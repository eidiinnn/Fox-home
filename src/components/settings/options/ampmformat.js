import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ModalItem,
  ModalTitles,
  DefaultSwitchLabel,
  DefaultSwitchInput,
  DefaultSwitchSpan,
} from "../../../style/settings";

export default function AmPmFormat() {
  const dispatch = useDispatch();
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);

  function AmPmSwitchOnChange() {
    const change = formatSetting === true ? false : true;
    dispatch({
      type: "SET_STATE_ITEM",
      item: "AmPmTimerFormat",
      value: change,
    });
  }

  return (
    <ModalItem row>
      <ModalTitles>12-hour clock</ModalTitles>

      <DefaultSwitchLabel>
        <DefaultSwitchInput
          type="checkbox"
          checked={formatSetting}
          onChange={AmPmSwitchOnChange}
        ></DefaultSwitchInput>
        <DefaultSwitchSpan></DefaultSwitchSpan>
      </DefaultSwitchLabel>
    </ModalItem>
  );
}
