import React from "react";
import Switch from "@mui/material/Switch";
import { useSelector, useDispatch } from "react-redux";
import { ModalItem, ModalTitles } from "../../../style/settings";

export default function AmPmFormat() {
  const dispatch = useDispatch();
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);

  function AmPmSwitchOnChange() {
    const change = formatSetting === true ? false : true;
    dispatch({ type: "AM_PM_FORMAT_CHANGE", timeFormat: change });
  }

  return (
    <ModalItem row>
      <ModalTitles>12-hour clock</ModalTitles>
      <Switch
        id="AmPmSwitch"
        checked={formatSetting}
        onChange={AmPmSwitchOnChange}
      />
    </ModalItem>
  );
}
