import HeadComp from "../../components/common/HeadComp";
import { connectionDb } from "../../helper/db-connection";
import AllNfts from "./../../components/allNfts/AllNfts";

const NftList = function (props) {
  return (
    <>
      <HeadComp title={`Explore Collectibles NFTs | Next-NFTs`} />
      <AllNfts data={props.nfts} />
    </>
  );
};

export default NftList;

export async function getStaticProps(context) {
  const client = await connectionDb();
  const db = client.db();
  const data = await db.collection("nft-collection").find().toArray();
  const nftData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      nfts: nftData,
    },
  };
}
