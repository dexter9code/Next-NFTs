import AllNfts from "./../../components/allNfts/AllNfts";

const NftList = function (props) {
  return <AllNfts data={props.nfts} />;
};

export default NftList;

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/getallNfts`);
  const data = await res.json();
  return {
    props: {
      nfts: data.data,
    },
  };
}