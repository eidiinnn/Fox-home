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
    backgroundColor: "#000F16",
    textIconColor: "#96b1b0",
    backgroundColorOpacity: 0.1,
    backdropFilterBlur: 25,
    blurLevel: 2,
    borderRadius: 50,
    customImage: false,
    imagesFromDB: null,
    timezone: "",
  };
  const localStorageObject = JSON.parse(localStorage.getItem("settings"));

  if (!localStorageObject) {
    localStorage.setItem("settings", JSON.stringify(defaultObject));
    return defaultObject;
  } else {
    return localStorageObject;
  }
}
