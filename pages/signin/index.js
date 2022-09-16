import { getSession } from "next-auth/react";
import SignIn from "../../components/signin/signIn";
import HeadComp from "./../../components/common/HeadComp";

const SignInHomePage = function (props) {
  return (
    <>
      <HeadComp title={`Login | Next-NFTs`} />
      <SignIn />
    </>
  );
};

export default SignInHomePage;

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
