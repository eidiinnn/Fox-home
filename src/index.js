import React from "react";
import ReactDOM from "react-dom";

import CentralDiv from "./components/centralDiv";

import { GlobalStyle, MainGrind } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainGrind>
      <CentralDiv />
    </MainGrind>
  </React.StrictMode>,
  document.getElementById("root")
);
