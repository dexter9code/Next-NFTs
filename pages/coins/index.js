import CoinTable from "./../../components/Coin/CoinTable";
import HeadComp from "./../../components/common/HeadComp";

const Coins = function (props) {
  const coinsData = props.coins;
  return (
    <>
      <HeadComp title={`Current Crypto Prices | Next-NFTs`} />
      <CoinTable coins={coinsData} />
    </>
  );
};

export default Coins;

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/getCoins`);
  const coinsData = await res.json();
  console.log(coinsData.data);

  return {
    props: {
      coins: coinsData.data,
    },
  };
}
