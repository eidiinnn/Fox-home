import Dexie from "dexie";
import store from "../redux/store";

const db = new Dexie("fox-home");
db.version(2).stores({
  image: "primaryKey, image, cropImage",
  icons: "domain, icon",
});

export async function saveOnDatabase(image, icon) {
  if (image && image.full && image.crop) {
    await db.image.put({
      primaryKey: "image",
      image: image.full,
      cropImage: image.crop,
    });
  }

  if (icon) {
    icon.map(async (item) => {
      if (item && item.domain && item.icon) {
        await db.icons.put(item);
      }
    });
  }
}

export async function getDataFromDatabase() {
  const dbArrayImage = await db.image.toArray();
  store.dispatch({
    type: "SET_STATE_ITEM",
    item: "imagesFromDB",
    value: {
      image: dbArrayImage[0].image,
      cropImage: dbArrayImage[0].cropImage,
    },
  });

  const dbArrayIcons = await db.icons.toArray();
  store.dispatch({
    type: "SET_STATE_ITEM",
    item: "customIcons",
    value: dbArrayIcons,
  });
}
