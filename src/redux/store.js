import { createStore } from "redux";
import initialState from "./initialState";

const settingReducer = (state = initialState(), action) => {
  switch (action.type) {
    case "IMAGE_CHANGE":
      const newState = { ...state };
      newState.image = action.image;
      return newState;
    default:
      return state;
  }
};

const store = createStore(settingReducer);

export default store;
