import Head from "next/head";

const HeadComp = function ({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/assets/logo/next_nft_resize.png" />
      <meta
        content="Next-Nfts is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using NEXT-NFTs today."
        name="description"
      />
    </Head>
  );
};

export default HeadComp;
