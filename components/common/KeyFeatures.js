import Image from "next/image";
import styles from "./keyFeatures.module.css";

const KeyFeatures = function ({ imgPath, title, subTitle }) {
  return (
    <div className={styles.key_feature__list}>
      <div className={styles.key_feature}>
        <div style={styles.key_feature__image}>
          <Image
            src={imgPath}
            alt="wallet-icon"
            width={40}
            height={40}
            style={{ width: "60px" }}
          />
        </div>
        <h1>{title}</h1>
        <p className={styles.about}>{subTitle}</p>
      </div>
    </div>
  );
};

export default KeyFeatures;
