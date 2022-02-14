import image from "../images/image.jpg";

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
    backgroundColor: "#110c19",
    image: image,
  };
  const localStorageObject = JSON.parse(localStorage.getItem("settings"));

  if (!localStorageObject) {
    localStorage.setItem("settings", JSON.stringify(defaultObject));
    return defaultObject;
  } else {
    return localStorageObject;
  }
}