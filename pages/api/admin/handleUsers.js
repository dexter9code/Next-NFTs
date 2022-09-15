import { connectionDb } from "../../../helper/db-connection";
import errorResponse from "../../../helper/ErrorResponse";
import { pick } from "lodash";
import { getSession } from "next-auth/react";

const getUsersHandler = async function (req, res) {
  if (req.method === "GET") {
    const session = getSession({ req });
    if (!session && session.user.image !== "admin") {
      res.status(401).json({
        status: `Error`,
        message: `Not-Authenticated `,
      });
      return;
    }

    let client;

    try {
      client = await connectionDb();
    } catch (error) {
      errorResponse(res, 500, error.message);
      await client.close();
      return;
    }

    try {
      const userColleciton = client.db("nft").collection("users");
      const users = await userColleciton.find().toArray();
      res.status(200).json({
        status: `Success`,
        data: users,
      });
    } catch (error) {
      errorResponse(res, 500, error.message);
    }
    await client.close();
  } else if (req.method === "DELETE") {
    const session = getSession({ req });
    if (!session && session.user.image !== "admin") {
      res.status(401).json({
        status: `Error`,
        message: `Not-Authenticated `,
      });
      return;
    }

    const { email } = pick(req.body, "email");

    if (email === "admin@io.com") {
      errorResponse(res, 400, `Can't Delete Admin Profile`);
      return;
    }

    let client;

    try {
      client = await connectionDb();
    } catch (error) {
      errorResponse(res, 500, error.message);
      await client.close();
      return;
    }
    try {
      const userColleciton = client.db("nft").collection("users");
      const users = await userColleciton.deleteOne({ email });
      res.status(200).json({
        status: `Success`,
        message: `Deleted successfully`,
      });
    } catch (error) {
      errorResponse(res, 500, error.message);
    }
    await client.close();
  } else {
    errorResponse(res, 400, `Can't handlet this type of request`);
  }
};

export default getUsersHandler;
