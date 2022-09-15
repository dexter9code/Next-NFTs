import errorResponse from "./../../../helper/ErrorResponse";
import { pick } from "lodash";
import { connectionDb } from "../../../helper/db-connection";
import { getSession } from "next-auth/react";

const handler = async function (req, res) {
  if (req.method !== "PATCH") {
    errorResponse(res, 400, `Can't handle this request`);
    return;
  }

  const session = getSession({ req });
  if (!session) {
    res.status(401).json({
      status: `Error`,
      message: `Not-Authenticated `,
    });
    return;
  }

  const { name, email } = pick(req.body, ["email", "name"]);

  if (!name || !email || name.trim().length < 0 || !email.includes("@")) {
    errorResponse(res, 400, `Invalid input provided`);
    return;
  }

  let client;

  try {
    client = await connectionDb();
  } catch (error) {
    error(res, 500, error.message);
    return;
  }

  const userCollection = client.db("nft").collection("users");

  try {
    const newUserData = await userCollection.updateOne(
      { email },
      { $set: { name: name } }
    );
    res.status(200).json({
      status: `Success`,
      message: `Updated Successfully`,
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
    return;
  }
  await client.close();
};

export default handler;
