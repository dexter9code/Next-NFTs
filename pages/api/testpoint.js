import _ from "lodash";
import { connectionDb } from "../../helper/db-connection";
import data from "../../data/prices.json";

const testPoint = async function (req, res) {
  if (req.method === "POST") {
    const { name, email } = _.pick(req.body, ["name", "email"]);
    console.log(name, email);
    const client = await connectionDb();
    const db = client.db();

    try {
      const result = await db.collection("crypto").insertMany(data);
      console.log(result);
      res.status(201).json({
        status: `Success`,
        message: `Added`,
      });
    } catch (error) {
      console.log(error.message);
    }
    await client.close();
  } else {
    res.status(400).json({
      status: `Failed`,
      message: `Only accepting post request`,
    });
  }
};

export default testPoint;
