import Dexie from "dexie";
import store from "../redux/store";

const db = new Dexie("imageDB");
db.version(2).stores({
  itens: "primaryKey, image, cropImage",
});

export async function uploadImage(image, cropImage) {
  await db.itens.put({
    primaryKey: "using",
    image: image,
    cropImage: cropImage,
  });
}

export async function getImageFromDB() {
  const dbArray = await db.itens.where({ primaryKey: "using" }).toArray();
  if (dbArray.length === 0 || !dbArray[0].image || !dbArray[0].cropImage)
    return null;

  store.dispatch({
    type: "IMAGE_GET",
    imagesFromDB: {
      image: URL.createObjectURL(dbArray[0].image),
      cropImage: URL.createObjectURL(dbArray[0].cropImage),
      blobImage: { image: dbArray[0].image, cropImage: dbArray[0].cropImage },
    },
  });
}
