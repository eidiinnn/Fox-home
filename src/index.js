import React from "react";
import ReactDOM from "react-dom";

import CentralDiv from "./components/centralDiv";
import GoogleSearchBar from "./components/googleSearchBar";

import { GlobalStyle, MainGrind } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainGrind>
      <GoogleSearchBar />
      <CentralDiv />
    </MainGrind>
  </React.StrictMode>,
  document.getElementById("root")
);
