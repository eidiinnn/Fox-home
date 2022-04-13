import { getImageFromDB } from "../image/dbFunctions";

export default function initialState() {
  const defaultObject = {
    bookmarkLinks: [
      "https://discord.com/channels/@me",
      "https://github.com/",
      "https://www.reddit.com/",
      "https://www.linkedin.com/",
      "https://web.whatsapp.com/",
      "https://www.notion.so/",
    ],
    AmPmTimerFormat: false,
    backgroundColor: "rgb(0, 3, 14, .1)",
    blurLevel: 5,
    borderRadius: 0,
    customImage: false,
    imagesFromDB: null,
  };
  const localStorageObject = JSON.parse(localStorage.getItem("settings"));

  if (!localStorageObject) {
    localStorage.setItem("settings", JSON.stringify(defaultObject));
    return defaultObject;
  } else {
    getImageFromDB();
    return localStorageObject;
  }
}
