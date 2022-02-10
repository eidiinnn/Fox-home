import React from "react";
import ReactDOM from "react-dom";

import CentralDiv from "./components/centralDiv";
import GoogleSearchBar from "./components/googleSearchBar";
import Settings from "./components/tools/settings";

import { GlobalStyle, MainGrind, Background } from "./style";

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
