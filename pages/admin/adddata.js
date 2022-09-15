import AddData from "./../../components/addData/AddData";
import { getSession } from "next-auth/react";
import HeadComp from "./../../components/common/HeadComp";

const AddingNfts = function (props) {
  return (
    <>
      <HeadComp title={`Admin DashBoard | Next-NFTs`} />
      <AddData />
    </>
  );
};

export default AddingNfts;

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

  if (session.user.image !== "admin") {
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
