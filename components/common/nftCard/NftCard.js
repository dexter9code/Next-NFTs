/* eslint-disable @next/next/no-img-element */
import styles from "./nftCard.module.css";

const NftCard = function (props) {
  const { title, image, lastsale, price } = props.nft;
  const imagePath = `/assets/nft/${image}`;
  return (
    <div className={`${styles.nft__profile} ${styles.wow} ${styles.fadeInUp}`}>
      <div className={`${styles.nft__data}`}>
        <img src={imagePath} alt="image" />
        <div className={styles.social_info}>
          <span className={styles.social_info__title}>{title}</span>
        </div>
      </div>
      <div className={styles.nft__profile__info}>
        <div className={styles.club_name}>
          <p>FatRat Mafia </p>
        </div>
        <div>
          <h6>
            <span>last sale:</span>
            <img
              src="/assets/svg/ethereum-1.svg"
              alt="svg"
              className={styles.sale__img}
            />
            {lastsale}
          </h6>
          <p className={styles.nft__price}>Price</p>
          <section className={styles.nft__profile__title}>
            <div>
              <img src="/assets/svg/ethereum-1.svg" alt="svg" />
            </div>
            <p>{price}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
