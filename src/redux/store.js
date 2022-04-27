import { createStore } from "redux";
import initialState from "./initialState";
import { uploadImage, getImageFromDB } from "../image/dbFunctions";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "SET_STATE_ITEM": {
      const newState = { ...state };
      newState[action.item] = action.value;
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
