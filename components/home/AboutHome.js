import Image from "next/image";
import styles from "./aboutHome.module.css";
import KeyFeatures from "./../common/KeyFeatures";

const AboutHome = function (props) {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h1>create and sell your NFTs</h1>
      </div>
      <div className={styles.features}>
        <KeyFeatures
          imgPath={"/assets/svg/wallet.svg"}
          title={"set up wallet"}
          subTitle={
            "Once you’ve set up your wallet of choice, connect it to Next-Auth by clicking the wallet icon in the top right corner"
          }
        />
        <KeyFeatures
          imgPath={"/assets/svg/collection.svg"}
          title={"create collection"}
          subTitle={
            "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee."
          }
        />
        <KeyFeatures
          imgPath={"/assets/svg/image.svg"}
          title={"Add your NFTs"}
          subTitle={
            "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content."
          }
        />
        <KeyFeatures
          imgPath={"/assets/svg/sale.svg"}
          title={"List them for sale          "}
          subTitle={
            "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!"
          }
        />
      </div>
    </section>
  );
};

export default AboutHome;
