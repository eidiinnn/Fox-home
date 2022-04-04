import { createStore } from "redux";
import initialState from "./initialState";
import {
  uploadImage,
  setUsedImageToUsing,
  removeUsedImage,
} from "../image/dbFunctions";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "IMAGE_CHANGE": {
      uploadImage(action.image, action.cropImage);
      return state;
    }
    case "CUSTOM_IMAGE_CHANGE": {
      const newState = { ...state };
      newState.customImage = true;
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
    case "BLUR_LEVEL_CHANGE": {
      const newState = { ...state };
      newState.blurLevel = action.blurLevel;
      return newState;
    }
    case "BOOKMARK_CHANGE": {
      const newState = { ...state };
      newState.bookmarkLinks = action.bookmarkLinks;
      return newState;
    }
    case "SAVE_SETTINGS": {
      localStorage.setItem("settings", JSON.stringify(state));
      removeUsedImage();
      return state;
    }
    case "DISCARD_SETTINGS": {
      const newState = JSON.parse(localStorage.getItem("settings"));
      setUsedImageToUsing();
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(settingReducer);

export default store;
