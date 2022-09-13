import Link from "next/link";
import styles from "./Button2.module.css";

const Button2 = function ({ title, location }) {
  return (
    <Link href={location}>
      <a className={styles.button__container}>
        <span>{title}</span>
        <div className={styles.wave}></div>
      </a>
    </Link>
  );
};

export default Button2;
