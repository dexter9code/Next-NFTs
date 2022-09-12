import _ from "lodash";
import { connectionDb } from "../../helper/db-connection";
import errorResponse from "./../../helper/ErrorResponse";
import { hashedPassword } from "../../helper/checkInput";

const signup = async function (req, res) {
  if (req.method !== "POST") {
    errorResponse(res, 400, `Can't handle this request`);
    return;
  }

  const { name, email, password, confirmPassword } = _.pick(req.body, [
    "name",
    "email",
    "password",
    "confirmPassword",
  ]);
  if (
    !name ||
    !email ||
    !email.includes("@") ||
    !password ||
    !confirmPassword
  ) {
    errorResponse(res, 400, `Required Field missing`);
    return;
  }

  if (password !== confirmPassword) {
    errorResponse(res, 400, `Password Miss-match`);
    return;
  }

  const userHashedPassword = await hashedPassword(password);

  const userData = { name, email, password: userHashedPassword };
  userData.role = "user";

  let client;
  try {
    client = await connectionDb();
  } catch (error) {
    errorResponse(res, 400, error.message);
    return;
  }

  const userCollection = client.db().collection("users");

  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    errorResponse(res, 400, `User Already exists`);
    return;
  }

  try {
    const user = await userCollection.insertOne(userData);
    res.status(201).json({
      status: `Success`,
      message: `Added successfully`,
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
  await client.close();
};

export default signup;
