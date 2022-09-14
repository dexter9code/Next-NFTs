import UserInfo from "./../../components/Users/userInfo";
import sendReq from "./../../helper/send-Req";
import { getSession } from "next-auth/react";

const UserData = function (props) {
  return <UserInfo users={props.users} />;
};

export default UserData;

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

  const response = await sendReq(
    `http://localhost:3000/api/admin/handleUsers`,
    "GET"
  );

  return {
    props: {
      users: response.data,
    },
  };
}
