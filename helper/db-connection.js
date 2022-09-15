import { MongoClient } from "mongodb";

export const connectionDb = async function () {
  const connectionString = `mongodb+srv://${process.env.DB_ADMIN_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mcfpfpr.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
  return await MongoClient.connect(connectionString);
};

export const insertIntoDocument = async function (client, collection, doc) {
  const db = client.db();
  return await db.collection(collection).insertOne(doc);
};
