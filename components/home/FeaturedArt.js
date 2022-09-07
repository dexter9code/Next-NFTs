import Image from "next/image";
import styles from "./featuredArt.module.css";

const FeaturedArt = function (props) {
  return (
    <section className={styles.featuredArt}>
      <div
        style={{
          width: "550px",
          boxShadow: "5px 10px #888888",
          marginRight: "4rem",
        }}
      >
        <Image
          src={"/assets/nft/lady.jpg"}
          alt={"lady-art"}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className={styles.featuredArt__content}>
        <h1 className={styles.featuredArt__title}>
          <span>Featured Art</span> of the month
        </h1>
        <h3>Gucci Ghost</h3>
        <p>BY:- Joha Trevor Andrew</p>
        <p>Current-Price:- $500</p>
        <p>Relased:- August-2022</p>
        <p>own By:-John Wick</p>
      </div>
    </section>
  );
};

export default FeaturedArt;
