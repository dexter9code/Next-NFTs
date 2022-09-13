import styles from "./button3.module.css";

const Button3 = (props) => {
  return (
    <div>
      <button className={styles.button_glitch} onClick={props.onclick}>
        <span>{props.title}</span>
      </button>
    </div>
  );
};

export default Button3;
