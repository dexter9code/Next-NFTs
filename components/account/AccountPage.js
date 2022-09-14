import styles from "./accountPage.module.css";
import SvgCard from "./../common/svgCard/SvgCard";
import { useRef } from "react";
import { getSession } from "next-auth/react";
import sendReq from "./../../helper/send-Req";
import toast, { Toaster } from "react-hot-toast";

const AccountPage = function ({ userName, userEmail, userRole }) {
  const nameRef = useRef();
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPassword = useRef();

  const onNameChangeHandler = async (e) => {
    e.preventDefault();
    const email = userEmail;
    const name = nameRef.current.value;
    const reqBody = { email, name };

    const response = await sendReq(`/api/edit/emailEdit`, "PATCH", reqBody);

    toast.success(`Successfully Changed`);
    console.log(response);
  };

  return (
    <>
      <Toaster />
      <div className={styles.account__container}>
        <main className={styles.main}>
          <div className={styles.user_view}>
            <nav className={styles.user_view__menu}>
              <ul className={styles.side_nav}>
                <SvgCard
                  active={true}
                  location={"/"}
                  title="settings"
                  svgName={"icons"}
                  svgId={"icon-settings"}
                />
                <SvgCard
                  active={false}
                  location={"/"}
                  title="Coins"
                  svgName={"bitcoin_money"}
                  svgId={"Layer_1"}
                />
                <SvgCard
                  active={false}
                  location={"/"}
                  title="featured"
                  svgName={"icons"}
                  svgId={"icon-star"}
                />
                <SvgCard
                  active={false}
                  location={"/"}
                  title="E-wallet"
                  svgName={"crypto_wallet"}
                  svgId={"crypto_1"}
                />
              </ul>
              {userRole === "admin" && (
                <div className={styles.admin_nav}>
                  <h5 className={styles.admin_nav__heading}>Admin</h5>
                  <ul className={styles.side_nav}>
                    <SvgCard
                      active={false}
                      location={"/"}
                      title="NFTs"
                      svgName={"nft_icon"}
                      svgId={"nft_1"}
                    />
                    <SvgCard
                      active={false}
                      location={"/"}
                      title="Users"
                      svgName={"icons"}
                      svgId={"icon-users"}
                    />
                    <SvgCard
                      active={false}
                      location={"/"}
                      title="Add Nfts"
                      svgName={"data_add"}
                      svgId={"data_1"}
                    />
                  </ul>
                </div>
              )}
            </nav>
            <div className={styles.user_view__content}>
              <div className={styles.user_view__form_container}>
                <h2
                  className={`${styles.heading_secondary} ${styles.ma_bt_md}`}
                >
                  Your account settings
                </h2>
                <form
                  className={`${styles.form} ${styles.form_user_data}`}
                  onSubmit={onNameChangeHandler}
                >
                  <div className={styles.form__group}>
                    <label className={styles.form__label} htmlFor="name">
                      Name
                    </label>
                    <input
                      className={styles.form__input}
                      id="name"
                      type="text"
                      defaultValue={userName}
                      required="required"
                      ref={nameRef}
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.ma_bt_md}`}>
                    <label className={styles.form__label} htmlFor="email">
                      Email address
                    </label>
                    <input
                      disabled={true}
                      className={styles.form__input}
                      id="email"
                      type="email"
                      defaultValue={userEmail}
                      required="required"
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.right}`}>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles.btn__small} ${styles.btn__green}`}
                    >
                      Save settings
                    </button>
                  </div>
                </form>
              </div>
              <div className={styles.line}>&nbsp;</div>
              <div className={styles.user_view__form_container}>
                <h2
                  className={`${styles.heading_secondary} ${styles.ma_bt_md}`}
                >
                  Password change
                </h2>
                <form className={`${styles.form} ${styles.form_user_settings}`}>
                  <div className={styles.form__group}>
                    <label
                      className={styles.form__label}
                      htmlFor="password-current"
                    >
                      Current password
                    </label>
                    <input
                      className={styles.form__input}
                      id="password-current"
                      type="password"
                      placeholder="••••••••"
                      required="required"
                      minLength={8}
                    />
                  </div>
                  <div className={styles.form__group}>
                    <label className={styles.form__label} htmlFor="password">
                      New password
                    </label>
                    <input
                      className={styles.form__input}
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      required="required"
                      minLength={8}
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.ma_bt_lg}`}>
                    <label
                      className={styles.form__label}
                      htmlFor="password-confirm"
                    >
                      Confirm password
                    </label>
                    <input
                      className={styles.form__input}
                      id="password-confirm"
                      type="password"
                      placeholder="••••••••"
                      required="required"
                      minLength={8}
                    />
                  </div>
                  <div className={`${styles.form__group} ${styles.right}`}>
                    <button
                      className={`${styles.btn} ${styles.btn__small} ${styles.btn__green}`}
                    >
                      Save password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AccountPage;
