import Dexie from "dexie";
import store from "../redux/store";

const db = new Dexie("imageDB");
db.version(1).stores({
  item: "image, value",
});

export async function uploadImage(value) {
  const getDefaultImage = await db.item.get("default");
  if (getDefaultImage !== undefined)
    db.item.put({ image: "old", value: getDefaultImage.value });

  await db.item.put({ image: "default", value: value });
  store.dispatch({ type: "CUSTOM_IMAGE_CHANGE" });
}

export async function setOldImageToDefault() {
  const getOldImage = await db.item.get("old");
  if (!getOldImage) return null;

  db.item.put({ image: "default", value: getOldImage.value });
  removeOldTable();
}

export async function removeOldTable() {
  db.item.delete("old");
}
