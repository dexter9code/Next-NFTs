import styles from "./home.module.css";
import Button2 from "./../common/Buttons/Button2";

const Home = function (props) {
  return (
    <main>
      <section className={styles.home__container}>
        <div className={styles.container__heading}>
          <h1 className={styles.heading}>Discover, collect, and sell</h1>
          <h1 className={styles.heading}>extraordinary NFTs</h1>
          <section className={styles.seconary__headline}>
            <p>
              From top Creators and{" "}
              <span className={styles.rotate}>Verified</span> Creators
            </p>
          </section>
          <div className={styles.button__container}>
            <Button2 title={"Buy Master-Piece"} location={"/allNfts"} />
            <Button2 title={"Explore-Coins"} location={"/coins"} />
          </div>
          <section className={styles.subHeading}>
            <p>
              Next-NFT is the world largest NFT marketplace with <br /> over
              millions of trusted customers with safe and secure transctions
            </p>
          </section>
        </div>
        <div>
          <video autoPlay={true} loop={true} src="/assets/video/nft.mp4" />
        </div>
      </section>
    </main>
  );
};

export default Home;
