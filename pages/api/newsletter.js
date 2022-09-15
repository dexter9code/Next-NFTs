import { connectionDb, insertIntoDocument } from "../../helper/db-connection";

async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(400).json({
        status: `In-Valid`,
        message: `Validation failed for Email`,
      });
      return;
    }

    let client;

    try {
      client = await connectionDb();
    } catch (error) {
      res.status(500).json({
        status: `Failed`,
        message: `Failed Connecting with database`,
      });
      return;
    }

    const exisitingUser = await client
      .db("nft")
      .collection("loopEmail")
      .findOne({ email });

    if (exisitingUser) {
      res.status(400).json({
        status: `Failed`,
        message: `Email already registered thank you`,
      });
      await client.close();
      return;
    }

    try {
      await insertIntoDocument(client, "loopEmail", { email });
    } catch (error) {
      res.status(500).json({
        status: `Failed`,
        message: `Error adding to Database`,
        actual: error.message,
      });
      return;
    }
    await client.close();

    res.status(201).json({
      status: `Success`,
    });
  } else {
    res.status(200).json({
      status: `Success`,
    });
  }
}

export default handler;
