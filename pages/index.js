import Head from "next/head";
import React, { createRef, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { NFT } from "../components/NFT";
import { SideBar } from "../components/SideBar";
import { PageNumbers } from "../components/PageNumbers";
import Navbar from "../components/Navbar";
import { TraitFilters } from "../components/TraitFilters";
import { Footer } from "../components/Footer";
import { config } from "../config";
import { getFilters, getNFTs } from "../util/requests";
import { FaXTwitter } from "react-icons/fa6"; // Import X (Twitter) icon

function Home({ title, img, description, nfts, pages, filters }) {
  const router = useRouter();
  const ref = createRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const { all_traits, attr_count } = filters;

  return (
    <div
      className="flex flex-col items-center justify-center 
    min-h-screen bg-gradient-to-r from-green-900 to-green-600 h-full"
      ref={ref}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/transparentpepe.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <NextSeo
        title={title}
        openGraph={{
          images: [
            {
              url: img,
            },
          ],
        }}
        twitter={{
          image: img,
          cardType: "summary_large_image",
        }}
        description={description}
      />
      <Navbar
        title={
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <img
                src="/transparentpepe1.png"
                alt="Logo"
                className="h-auto max-w-[25%] mr-2 inline"
              />
            </div>
            <a
              href="https://twitter.com/Abstract_Pepes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors duration-200"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        }
        menu={true}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        className="font-press-start"
      />
      <main className="relative flex justify-content: flex-end w-full flex-1 h-screen">
        <SideBar
          all_traits={all_traits}
          attr_count={attr_count}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <div className="flex flex-col w-full w-5xl px-4">
          {showMenu}
          <TraitFilters />
          <div className="flex flex-wrap justify-between sm:justify-start max-w-5xl w-full">
            {nfts.map(
              (nft, idx) => nft && <NFT {...nft} index={idx} key={idx} />
            )}
          </div>
          <PageNumbers pages={pages} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  let { nfts = [], pages } = await getNFTs(query);
  let filters = await getFilters(query);
  return {
    title: config.COLLECTION_TITLE,
    description: config.COLLECTION_DESCRIPTION,
    img: config.COLLECTION_IMG_LINK,
    nfts,
    pages,
    filters,
  };
};

export default Home;
