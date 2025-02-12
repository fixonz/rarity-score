export const config = {
  env: "prod",
  LOCAL_API_URL: "localhost:3000",
  API_URL: "rarity-score-blush.vercel.app",
  COLLECTION_NAME: "Abstract PEPES",
  COLLECTION_TITLE: "Abstract PEPES",
  COLLECTION_DESCRIPTION: '2,222 collectible PEPE characters representing the NFT culture on Abstract chain.',
  COLLECTION_IMG_LINK: "https://cdn.discordapp.com/attachments/1284769507130478605/1339242341315383366/mage33.png?ex=67ae0220&is=67acb0a0&hm=8d876b58343b1b39f73750a82275fda5a223525f8215c77decbbec4dd03155ec&",
  CONTRACT: {
    // if you're not sure, set CONTRACT: {}, will remove opensea link
    CHAIN: "abstract", //possible values of ethereum, matic (polygin), klatyn, solana
    ADDRESS: "0xc97CBBa151Ed084ed49A0C53b93A8f2e805c5489", //note: for solana these values change, so currently not supported
  },
  WEIGHTS: {},
};
