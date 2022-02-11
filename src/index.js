import React from "react";
import ReactDOM from "react-dom";

import CentralDiv from "./components/centralDiv";
import GoogleSearchBar from "./components/googleSearchBar";
import Settings from "./components/settings";
import defaultSettings from "./defaultSettings";

import { GlobalStyle, MainGrind, Background } from "./style";

defaultSettings();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Background />
    <MainGrind>
      <GoogleSearchBar />
      <CentralDiv />
      <Settings />
    </MainGrind>
  </React.StrictMode>,
  document.getElementById("root")
);
