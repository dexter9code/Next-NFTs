import HeadComp from "../../components/common/HeadComp";
import { connectionDb } from "../../helper/db-connection";
import FeaturedNft from "./../../components/featuredNfts/FeaturedNft";

const FeaturedNfts = function (props) {
  return (
    <>
      <HeadComp title={`Explore Featured NFTs | Next-NFTs`} />
      <FeaturedNft data={props.nfts} />
    </>
  );
};

export default FeaturedNfts;

export async function getStaticProps(context) {
  const client = await connectionDb();
  const db = client.db();
  const data = await db.collection("nft-collection").find().toArray();
  const unFilteredData = JSON.parse(JSON.stringify(data));
  const featuredData = unFilteredData.filter((item) => item.isFeatured);

  return {
    props: {
      nfts: featuredData,
    },
  };
}
