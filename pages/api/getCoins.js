import { connectionDb } from "../../helper/db-connection";

const getResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    status: statusCode === 400 ? "Error" : `Success`,
    message,
  });
};

const getCoins = async function (req, res) {
  if (req.method !== "GET") {
    getResponse(res, 400, `Can't process this request`);
    return;
  }

  let client;
  try {
    client = await connectionDb();
  } catch (error) {
    getResponse(res, 400, error.message);
    return;
  }

  const db = client.db();

  let data;
  try {
    data = await db.collection("crypto").find().toArray();
    res.status(200).json({
      status: `Success`,
      data,
    });
  } catch (error) {
    getResponse(res, 400, error.message);
    return;
  }
  await client.close();
};

export default getCoins;
