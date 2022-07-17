import Dexie from "dexie";
import store from "../redux/store";

const db = new Dexie("fox-home");
const databaseImageDB = new Dexie('imageDB');

databaseImageDB.version(2).stores({
  itens: "primaryKey, image, cropImage",
});

db.version(2).stores({
  image: "primaryKey, image, cropImage",
  icons: "domain, icon",
});

export async function saveOnDatabase(image, icon) {
  if (image && image.full && image.crop) {
    await databaseImageDB.itens.put({
      primaryKey: "using",
      image: image.full,
      cropImage: image.crop,
    });
  }

  if (icon) {
    icon.map(async (item) => {
      if (item && item.domain && item.icon) {
        if(item.icon === "noIcon") return await db.icons.delete(item.domain);
        else await db.icons.put(item, [item.domain]);
      }
    });
  }
}

export async function getDataFromDatabase() {
  const dbArrayImage = await databaseImageDB.itens.toArray();
  if(dbArrayImage[0] && dbArrayImage[0].image && dbArrayImage[0].cropImage){
    store.dispatch({
      type: "SET_STATE_ITEM",
      item: "imagesFromDB",
      value: {
        image: URL.createObjectURL(dbArrayImage[0].image),
        cropImage: URL.createObjectURL(dbArrayImage[0].cropImage),
      },
    });
  }

  const dbArrayIcons = await db.icons.toArray();
  store.dispatch({
    type: "SET_STATE_ITEM",
    item: "customIcons",
    value: dbArrayIcons,
  });
}
