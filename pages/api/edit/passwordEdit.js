import errorResponse from "./../../../helper/ErrorResponse";
import { pick } from "lodash";
import { connectionDb } from "../../../helper/db-connection";
import { checkPassword } from "../../../helper/checkInput";
import { hashedPassword } from "./../../../helper/checkInput";

const passwordHandler = async function (req, res) {
  if (req.method !== "PATCH") {
    errorResponse(res, 400, `Can't handle this type request`);
    return;
  }

  const { email, confirmPassword, currentPassword, newPassword } = pick(
    req.body,
    ["currentPassword", "newPassword", "confirmPassword", "email"]
  );

  if (!currentPassword || !confirmPassword || !newPassword || !email) {
    errorResponse(res, 400, `Invalid input provided`);
    return;
  }

  if (newPassword !== confirmPassword) {
    errorResponse(res, 400, `Password don't match`);
    return;
  }

  let client;

  try {
    client = await connectionDb();
  } catch (error) {
    errorResponse(res, 500, error.message);
  }

  const userCollection = client.db("nft").collection("users");

  const user = await userCollection.findOne({ email });

  console.log(user);
  const userPassword = await checkPassword(currentPassword, user.password);
  if (!userPassword) {
    res.status(401).json({
      status: `Invalid`,
      message: `Invalid Password `,
    });
    await client.close();
    return;
  }

  const newHashedPassword = await hashedPassword(newPassword);

  try {
    await userCollection.updateOne(
      { email },
      { $set: { password: newHashedPassword } }
    );
    res.status(200).json({
      status: `Success`,
      message: `Updated Successfully`,
    });
  } catch (error) {
    errorResponse(res, 500, error.message);
  }
  await client.close();
};

export default passwordHandler;
