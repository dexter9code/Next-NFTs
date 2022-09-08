import { MongoClient } from "mongodb";

export const connectionDb = async function () {
  return await MongoClient.connect(
    "mongodb+srv://Mikey:myNameIs_Mikey@cluster0.mcfpfpr.mongodb.net/nft?retryWrites=true&w=majority"
  );
};

export const insertIntoDocument = async function (client, collection, doc) {
  const db = client.db();
  return await db.collection(collection).insertOne(doc);
};
