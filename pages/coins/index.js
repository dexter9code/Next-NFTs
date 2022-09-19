import { connectionDb } from "../../helper/db-connection";
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
  const client = await connectionDb();
  const unFilteredData = await client
    .db("nft")
    .collection("crypto")
    .find()
    .toArray();
  const coinsData = JSON.parse(JSON.stringify(unFilteredData));

  return {
    props: {
      coins: coinsData,
    },
  };
}
