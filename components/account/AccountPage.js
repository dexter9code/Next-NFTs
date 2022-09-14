import styles from "./accountPage.module.css";
import SvgCard from "./../common/svgCard/SvgCard";

const AccountPage = function (props) {
  return (
    <div className={styles.account__container}>
      <main className={styles.main}>
        <div className={styles.user_view}>
          <nav className={styles.user_view__menu}>
            <ul className={styles.side_nav}>
              <li className={styles.side_nav__active}>
                <SvgCard
                  location={"/"}
                  title="settings"
                  svgName={"icons"}
                  svgId={"icon-settings"}
                />
              </li>
              <SvgCard
                location={"/"}
                title="Coins"
                svgName={"bitcoin_money"}
                svgId={"Layer_1"}
              />
              <SvgCard
                location={"/"}
                title="featured"
                svgName={"icons"}
                svgId={"icon-star"}
              />
              <SvgCard
                location={"/"}
                title="E-wallet"
                svgName={"crypto_wallet"}
                svgId={"crypto_1"}
              />
            </ul>
            <div className={styles.admin_nav}>
              <h5 className={styles.admin_nav__heading}>Admin</h5>
              <ul className={styles.side_nav}>
                <SvgCard
                  location={"/"}
                  title="NFTs"
                  svgName={"nft_icon"}
                  svgId={"nft_1"}
                />
                <SvgCard
                  location={"/"}
                  title="Users"
                  svgName={"icons"}
                  svgId={"icon-users"}
                />
                <SvgCard
                  location={"/"}
                  title="Add Nfts"
                  svgName={"data_add"}
                  svgId={"data_1"}
                />
              </ul>
            </div>
          </nav>
          <div className={styles.user_view__content}>
            <div className={styles.user_view__form_container}>
              <h2 className={`${styles.heading_secondary} ${styles.ma_bt_md}`}>
                Your account settings
              </h2>
              <form className={`${styles.form} ${styles.form_user_data}`}>
                <div className={styles.form__group}>
                  <label className={styles.form__label} htmlFor="name">
                    Name
                  </label>
                  <input
                    className={styles.form__input}
                    id="name"
                    type="text"
                    defaultValue="Jonas Schmedtmann"
                    required="required"
                  />
                </div>
                <div className={`${styles.form__group} ${styles.ma_bt_md}`}>
                  <label className={styles.form__label} htmlFor="email">
                    Email address
                  </label>
                  <input
                    className={styles.form__input}
                    id="email"
                    type="email"
                    defaultValue="admin@natours.io"
                    required="required"
                  />
                </div>
                <div className={`${styles.form__group} ${styles.right}`}>
                  <button
                    className={`${styles.btn} ${styles.btn__small} ${styles.btn__green}`}
                  >
                    Save settings
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.line}>&nbsp;</div>
            <div className={styles.user_view__form_container}>
              <h2 className={`${styles.heading_secondary} ${styles.ma_bt_md}`}>
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
  );
};

export default AccountPage;
