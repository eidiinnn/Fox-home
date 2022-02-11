import image from "./images/image.jpg";

export default function defaultSettings() {
  if (!localStorage.getItem("AmPm")) localStorage.setItem("AmPm", false);
  if (!localStorage.getItem("image")) localStorage.setItem("image", image);
}
