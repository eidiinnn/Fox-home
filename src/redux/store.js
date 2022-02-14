import { createStore } from "redux";
import initialState from "./initialState";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "IMAGE_CHANGE": {
      const newState = { ...state };
      newState.image = action.image;
      return newState;
    }
    case "AM_PM_FORMAT_CHANGE": {
      const newState = { ...state };
      newState.AmPmTimerFormat = action.timeFormat;
      return newState;
    }
    case "BACKGROUND_COLOR_CHANGE": {
      const newState = { ...state };
      newState.backgroundColor = action.color;
      return newState;
    }
    case "SAVE_SETTINGS": {
      localStorage.setItem("settings", JSON.stringify(state));
      return state;
    }
    case "DISCARD_SETTINGS": {
      const newState = JSON.parse(localStorage.getItem("settings"));
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(settingReducer);

export default store;
