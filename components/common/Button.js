import Link from "next/link";
import styles from "./button.module.css";

const Button = function ({ title, location }) {
  return (
    <div className={styles.btn}>
      <Link href={location}>{title}</Link>
    </div>
  );
};

export default Button;
