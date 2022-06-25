import { createStore } from "redux";
import initialState from "./initialState";
import {
  saveOnDatabase,
  getDataFromDatabase,
} from "../indexDB/indexDbFunctions";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "SET_STATE_ITEM": {
      const newState = { ...state };
      newState[action.item] = action.value;
      return newState;
    }

    case "SAVE_SETTINGS": {
      const stateToLocalStorage = {
        ...state,
        imagesFromDB: null,
        customIcons: null,
      };
      localStorage.setItem("settings", JSON.stringify(stateToLocalStorage));

      let ImageDocument = null;
      if (
        state.imagesFromDB &&
        state.imagesFromDB &&
        state.imagesFromDB.image &&
        state.imagesFromDB.cropImage
      ) {
        ImageDocument = {
          full: state.imagesFromDB.image,
          crop: state.imagesFromDB.cropImage,
        };
      }
      saveOnDatabase(ImageDocument, state.customIcons);

      return state;
    }

    case "DISCARD_SETTINGS": {
      const newState = JSON.parse(localStorage.getItem("settings"));
      getDataFromDatabase();
      return newState;
    }

    default:
      return state;
  }
};

const store = createStore(settingReducer);

export default store;
