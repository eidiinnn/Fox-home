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
    backgroundColor: "rgb(0, 3, 14, .2)",
    textIconColor: "white",
    blurLevel: 2,
    borderRadius: 30,
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
