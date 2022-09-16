import { getSession } from "next-auth/react";
import Signup from "../../components/signup/SigUp";
import HeadComp from "./../../components/common/HeadComp";

const singup = function (props) {
  return (
    <>
      <HeadComp title={`Create Account | Next-NFTs`} />
      <Signup />
    </>
  );
};

export default singup;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      test: "hello",
    },
  };
}
