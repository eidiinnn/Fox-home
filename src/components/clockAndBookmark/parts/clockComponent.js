import React from "react";
import { useSelector } from "react-redux";

import Clock from "react-live-clock";
import { CentralDivClock } from "../../../style";

export default function ClockComponent() {
  const formatSetting = useSelector((state) => state.AmPmFormat);

  function setting() {
    if (formatSetting === true)
      return {
        format: "hh:mm A",
        fontSize: "6em",
        mediaFontSize: "10.9vw",
      };

    return {
      format: "HH:mm",
      fontSize: "10em",
      mediaFontSize: "15vw",
    };
  }

  return (
    <CentralDivClock
      fontSize={setting.fontSize}
      mediaFontSize={setting.mediaFontSize}
    >
      <Clock format={setting.format} ticking={true} />
    </CentralDivClock>
  );
}
