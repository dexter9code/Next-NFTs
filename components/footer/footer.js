/* eslint-disable @next/next/no-img-element */
import styles from "./footer.module.css";

const Footer = function (props) {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <img src="/assets/logo/NEXT NFTs-1_trans.png" alt="logo-image" />
      </div>
      <ul className={styles.footer__nav}>
        <li>about us</li>
        <li>contact</li>
        <li>download app</li>
      </ul>
      <p className={styles.footer__copyright}>
        @ by rudy. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
