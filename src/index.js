import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import ClockBookmarkContainer from "./components/clockAndBookmark/clockBookmarkContainer ";
import GoogleSearchBar from "./components/googleSearchBar";
import SettingsMenu from "./components/settings/settingsMenu";
import Background from "./components/background";

import { GlobalStyle, MainGrind } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Background />
      <MainGrind>
        <SettingsMenu />
        <GoogleSearchBar />
        <ClockBookmarkContainer />
      </MainGrind>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
