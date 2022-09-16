import AccountPage from "./../../components/account/AccountPage";
import { getSession } from "next-auth/react";
import HeadComp from "../../components/common/HeadComp";
import { connectionDb } from "../../helper/db-connection";

const AccountIndex = function (props) {
  const { email, image } = props.session.user;
  return (
    <>
      <HeadComp title={`DashBoard | Next-NFTs`} />
      <AccountPage
        userEmail={email}
        userRole={image}
        userName={props.userName}
      />
      ;
    </>
  );
};

export default AccountIndex;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: `/signin`,
        permanent: false,
      },
    };
  }

  const userEmail = session.user.email;

  const client = await connectionDb();
  const currentUser = await client
    .db("nft")
    .collection("users")
    .findOne({ email: userEmail });

  return {
    props: {
      session,
      userName: currentUser.name,
    },
  };
}
