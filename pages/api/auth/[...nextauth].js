import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkPassword } from "../../../helper/checkInput";
import { connectionDb } from "../../../helper/db-connection";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectionDb();

        const userCollection = client.db().collection("users");

        const currentUser = await userCollection.findOne({
          email: credentials.email,
        });

        const authUser = await checkPassword(
          credentials.password,
          currentUser.password
        );

        if (!currentUser || !authUser) {
          throw new Error(`Invalid email or Password`);
        }

        await client.close();
        return {
          email: currentUser.email,
          name: currentUser.name,
          image: currentUser.role,
        };
      },
    }),
  ],
});
