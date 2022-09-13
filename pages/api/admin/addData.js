import errorResponse from "./../../../helper/ErrorResponse";
import _ from "lodash";
import { connectionDb } from "../../../helper/db-connection";

const addData = async function (req, res) {
  if (req.method !== "POST") {
    errorResponse(res, 400, `Can't handle this type request`);
    return;
  }

  const { title, price, image, lastsale, isFeatured } = _.pick(req.body, [
    "title",
    "price",
    "image",
    "lastsale",
    "isFeatured",
  ]);

  if (!title || title.trim().length < 0 || !price || !image || !lastsale) {
    errorResponse(res, 400, `Invalid Input provided`);
    return;
  }
  const sendBody = { title, price, image, lastsale, isFeatured };

  let client;

  try {
    client = await connectionDb();
  } catch (error) {
    errorResponse(res, 500, error.message);
  }

  const collection = client.db().collection("nft-collection");
  try {
    const nft = await collection.insertOne(sendBody);
    res.status(201).json({
      status: `Success`,
      data: nft,
    });
  } catch (error) {
    errorResponse(res, 400, error.message);
  }

  await client.close();
};

export default addData;
