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
