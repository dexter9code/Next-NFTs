import AccountPage from "./../../components/account/AccountPage";
import { getSession } from "next-auth/react";
import HeadComp from "../../components/common/HeadComp";
const AccountIndex = function (props) {
  console.log(props.session);
  const { email, image, name } = props.session.user;
  return (
    <>
      <HeadComp title={`DashBoard | Next-NFTs`} />
      <AccountPage userEmail={email} userRole={image} userName={name} />;
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

  return {
    props: {
      session,
    },
  };
}
