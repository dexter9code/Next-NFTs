import styles from "./allNfts.module.css";
import NftCard from "./../common/nftCard/NftCard";

const AllNfts = function ({ data }) {
  return (
    <section>
      <div className={styles.title}>
        <h1>
          All lastest <span>Nfts</span> Drop
        </h1>
      </div>
      <div className={styles.card__container}>
        {data?.map((item) => (
          <NftCard key={item._id} nft={item} />
        ))}
      </div>
      {/* need to change this later */}
    </section>
  );
};

export default AllNfts;
