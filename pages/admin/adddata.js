import AddData from "./../../components/addData/AddData";
import { getSession } from "next-auth/react";

const AddingNfts = function (props) {
  return <AddData />;
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

  if (session.user.email !== "admin") {
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
