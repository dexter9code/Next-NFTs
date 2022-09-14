import TableHead from "./../common/table/TableHead";
import styles from "./usersInfo.module.css";
import sendReq from "./../../helper/send-Req";
import toast, { Toaster } from "react-hot-toast";

const UserInfo = function ({ users }) {
  const onClickHandler = async (usersInfo) => {
    const { email } = usersInfo;

    try {
      const res = await sendReq(
        `http://localhost:3000/api/admin/handleUsers`,
        "DELETE",
        { email }
      );

      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h1>Currently Active Users</h1>
        </div>
        <div>
          <table>
            <TableHead
              title1={"Username"}
              title2={"Email"}
              title3={`Role`}
              title4={`Action`}
            />
            <tbody>
              {users?.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>
                      <div className={styles.body_container__items}>
                        <div className={styles.body_container__item}>
                          <div className={styles.body_container__item__content}>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className={styles.body__container__price}>
                        <span>{item.email}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.body__container__market_cap}>
                        <span>{item.role}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.body__container__graph__chart}>
                        <button onClick={() => onClickHandler(item)}>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
