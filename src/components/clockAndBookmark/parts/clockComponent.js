import React from "react";
import { useSelector } from "react-redux";

import Clock from "react-live-clock";
import { CentralDivClock } from "../../../style";

export default function ClockComponent() {
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);

  function getSetting(isPM) {
    if (isPM === true) {
      return {
        format: "hh:mm A",
        fontSize: "6em",
        mediaFontSize: "10.9vw",
      };
    } else {
      return {
        format: "HH:mm",
        fontSize: "10em",
        mediaFontSize: "15vw",
      };
    }
  }

  const settings = getSetting(formatSetting);

  return (
    <CentralDivClock
      fontSize={settings.fontSize}
      mediaFontSize={settings.mediaFontSize}
    >
      <Clock
        key={formatSetting}
        format={settings.format}
        ticking={true}
        onChange
      />
    </CentralDivClock>
  );
}
