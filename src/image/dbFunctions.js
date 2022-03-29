import Dexie from "dexie";
import store from "../redux/store";

const db = new Dexie("imageDB");
db.version(2).stores({
  itens: "primaryKey, image, cropImage",
});

export async function uploadImage(image, cropImage) {
  const getDefaultImage = await db.itens.get("using");
  if (getDefaultImage !== undefined) {
    db.itens.put({
      primaryKey: "used",
      image: getDefaultImage.image,
      cropImage: getDefaultImage.cropImage,
    });
  }

  await db.itens.put({
    primaryKey: "using",
    image: image,
    cropImage: cropImage,
  });

  store.dispatch({ type: "CUSTOM_IMAGE_CHANGE" });
}

export async function setUsedImageToUsing() {
  const getOldImage = await db.itens.get("used");
  if (!getOldImage) return null;

  db.itens.put({
    primaryKey: "using",
    image: getOldImage.image,
    cropImage: getOldImage.cropImage,
  });

  removeUsedImage();
}

export async function removeUsedImage() {
  db.itens.delete("used");
}
