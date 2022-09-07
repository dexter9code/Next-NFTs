import styles from "./subhome.module.css";
import Button from "./../common/Button";
const SubHome = function (props) {
  return (
    <section className={styles.container}>
      <div className={styles.content__container}>
        <div className={styles.heading}>
          <h2>
            Join the fastest <br /> growing <br /> marketplace
          </h2>
        </div>
        <div className={styles.context}>
          <p>
            Next-NFT is one of the fastest growing market in the world and the
            <br />
            fastest growing ecosystem in crypto, with Millions of customers all
            <br />
            around the world and verified NFTS to waiting for to be discorved.
          </p>
          <Button title={"Join NEXT"} location={"/"} />
        </div>
      </div>
    </section>
  );
};

export default SubHome;
