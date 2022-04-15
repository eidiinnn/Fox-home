import React from "react";
import { useSelector } from "react-redux";

import Clock from "react-live-clock";
import { ClockContainer } from "../../../style/centralContainer";

export default function ClockComponent() {
  const formatSetting = useSelector((state) => state.AmPmTimerFormat);
  const timezoneSetting = useSelector((state) => state.timezone);

  function getFormat() {
    return formatSetting ? "hh:mm A" : "HH:mm";
  }

  return (
    <ClockContainer AMPM={formatSetting}>
      <Clock key={formatSetting} format={getFormat} timezone={timezoneSetting} ticking={true} onChange />
    </ClockContainer>
  );
}
