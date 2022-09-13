import Link from "next/link";
import styles from "./button.module.css";

const Button = function ({ title, location }) {
  return (
    <Link href={location}>
      <a>
        <div className={styles.btn}>{title}</div>
      </a>
    </Link>
  );
};

export default Button;
