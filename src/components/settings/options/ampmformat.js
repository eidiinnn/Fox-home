import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Switch from "@mui/material/Switch";
import { SettingsModalItems, SettingsModalTitles } from "../../../style";

export default function AmPmFormat() {
  const dispatch = useDispatch();
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);

  function AmPmSwitchOnChange() {
    const change = formatSetting === true ? false : true;
    dispatch({ type: "AM_PM_FORMAT_CHANGE", timeFormat: change });
  }

  return (
    <SettingsModalItems vertical>
      <SettingsModalTitles>Use AM PM time format</SettingsModalTitles>
      <Switch
        id="AmPmSwitch"
        checked={formatSetting}
        onChange={AmPmSwitchOnChange}
      />
    </SettingsModalItems>
  );
}
