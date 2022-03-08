import React from "react";
import { useSelector } from "react-redux";

import Clock from "react-live-clock";
import { ClockContainer } from "../../../style/centralContainer";

export default function ClockComponent() {
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);

  function getFormat() {
    return formatSetting ? "hh:mm A" : "HH:mm";
  }

  return (
    <ClockContainer AMPM={formatSetting}>
      <Clock key={formatSetting} format={getFormat} ticking={true} onChange />
    </ClockContainer>
  );
}
