import styles from "./allNfts.module.css";
import NftCard from "./../common/nftCard/NftCard";
const DUMMY = [
  {
    id: 132,
    title: "yeets #351",
    price: 0.2461,
    image: "/assets/nft/yeets351.png",
    lastSale: 0.254,
  },
  {
    id: 845,
    title: "yeets #352",
    price: 0.2461,
    image: "/assets/nft/yeets352.png",
    lastSale: 0.254,
  },
];

const AllNfts = function () {
  return (
    <section>
      <div className={styles.title}>
        <h1>
          All lastest <span>Nfts</span> Drop
        </h1>
      </div>
      <div className={styles.card__container}>
        {DUMMY.map((item) => (
          <NftCard key={item.id} nft={item} />
        ))}
      </div>
    </section>
  );
};

export default AllNfts;
