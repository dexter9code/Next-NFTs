import Layout from "../components/navbar/Layout";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Head>
          <title>Next-NFT</title>
          <link rel="icon" href="/assets/logo/next_nft_resize.png" />
          <meta
            content="Next-Nfts is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using NEXT-NFTs today."
            name="description"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}

export default MyApp;
