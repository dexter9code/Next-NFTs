import { connectionDb } from "../../helper/db-connection";

const getallNfts = async function (req, res) {
  if (req.method === "GET") {
    const client = await connectionDb();
    const db = client.db();
    const data = await db.collection("nft-collection").find().toArray();

    res.status(200).json({
      status: `Success`,
      data,
    });
  } else {
    res.status(400).json({
      status: `Failed`,
      message: `Invalid request`,
    });
  }
};

export default getallNfts;
