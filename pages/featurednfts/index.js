import FeaturedNft from "./../../components/featuredNfts/FeaturedNft";

const FeaturedNfts = function (props) {
  return <FeaturedNft data={props.nfts} />;
};

export default FeaturedNfts;

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/getallNfts`);
  const data = await res.json();
  const featuredData = data.data.filter((item) => item.isFeatured);

  return {
    props: {
      nfts: featuredData,
    },
  };
}
