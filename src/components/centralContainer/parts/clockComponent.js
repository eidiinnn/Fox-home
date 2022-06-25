import React from "react";
import { useSelector } from "react-redux";

import Clock from "react-live-clock";
import { ClockContainer } from "../../../style/centralContainer";

export default function ClockComponent() {
  const AmPmTimerFormat = useSelector((state) => state.AmPmTimerFormat);
  const timezoneSetting = useSelector((state) => state.timezone);

  function getFormat() {
    return AmPmTimerFormat ? "hh:mm A" : "HH:mm";
  }

  return (
    <ClockContainer AMPM={AmPmTimerFormat}>
      <Clock key={AmPmTimerFormat} format={getFormat()} timezone={timezoneSetting} ticking={true} onChange />
    </ClockContainer>
  );
}
