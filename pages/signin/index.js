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
