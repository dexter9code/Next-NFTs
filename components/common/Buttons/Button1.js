import styles from "./button1.module.css";

const Button1 = function ({ title, subTitle }) {
  return (
    <div className={styles.frame}>
      <button className={`${styles.custom_btn} ${styles.btn_12} `}>
        <span>{subTitle}</span>
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button1;
