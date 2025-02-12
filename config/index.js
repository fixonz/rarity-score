export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "rarity-score-blush.vercel.app",
  COLLECTION_NAME: "Abstract PEPES",
  COLLECTION_TITLE: "Abstract PEPES",
  COLLECTION_DESCRIPTION: '2,222 collectible PEPE characters representing the NFT culture on Abstract chain.',
  COLLECTION_IMG_LINK: "https://pbs.twimg.com/profile_banners/1870283865727602689/1734893502/1500x500.jpg",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "abstract", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0xc97CBBa151Ed084ed49A0C53b93A8f2e805c5489", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
