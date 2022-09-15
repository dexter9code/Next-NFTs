import styles from "./button1.module.css";
import Link from "next/link";

const Button1 = function ({ title, subTitle, location }) {
  return (
    <Link href={location}>
      <a>
        <div className={styles.frame}>
          <button className={`${styles.custom_btn} ${styles.btn_12} `}>
            <span>{subTitle}</span>
            <span>{title}</span>
          </button>
        </div>
      </a>
    </Link>
  );
};

export default Button1;
