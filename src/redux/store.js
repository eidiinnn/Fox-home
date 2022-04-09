import { createStore } from "redux";
import initialState from "./initialState";
import { uploadImage, getImageFromDB } from "../image/dbFunctions";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "IMAGE_GET": {
      const newState = { ...state };
      newState.imagesFromDB = action.imagesFromDB;
      return newState;
    }

    case "IMAGE_CHANGE": {
      const newState = { ...state };
      newState.imagesFromDB = {
        image: URL.createObjectURL(action.image),
        cropImage: URL.createObjectURL(action.cropImage),
        blobImage: { image: action.image, cropImage: action.cropImage },
      };
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
      const stateToLocalStorage = { ...state };
      stateToLocalStorage.imagesFromDB = null;
      localStorage.setItem("settings", JSON.stringify(stateToLocalStorage));

      if (state.imagesFromDB !== null)
        uploadImage(
          state.imagesFromDB.blobImage.image,
          state.imagesFromDB.blobImage.cropImage
        );

      return state;
    }

    case "DISCARD_SETTINGS": {
      const newState = JSON.parse(localStorage.getItem("settings"));
      getImageFromDB();
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(settingReducer);

export default store;
