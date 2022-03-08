import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import CentralContainer from "./components/centralContainer";
import SettingsMenu from "./components/settings/settingsMenu";

import GetImage from "./image/getImage";

import { GlobalStyle, MainGrind } from "./style";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <GetImage type="background" />
      <MainGrind>
        <SettingsMenu />
        <CentralContainer />
      </MainGrind>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
