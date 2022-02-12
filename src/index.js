import React from "react";
import ReactDOM from "react-dom";

import ClockBookmarkContainer from "./components/clockAndBookmark/clockBookmarkContainer ";
import GoogleSearchBar from "./components/googleSearchBar";
import SettingsMenu from "./components/settings/settingsMenu";

import { GlobalStyle, MainGrind, Background } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Background />
    <MainGrind>
      <SettingsMenu />
      <GoogleSearchBar />
      <ClockBookmarkContainer />
    </MainGrind>
  </React.StrictMode>,
  document.getElementById("root")
);
