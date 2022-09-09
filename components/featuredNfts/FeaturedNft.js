import styles from "./featuredNft.module.css";
import NftCard from "./../common/nftCard/NftCard";

const FeaturedNft = function ({ data }) {
  return (
    <section>
      <div className={styles.title}>
        <h1>
          Featrued <span>Nfts</span> Drops
        </h1>
      </div>
      <div className={styles.card__container}>
        {data?.map((item) => (
          <NftCard key={item._id} nft={item} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedNft;
