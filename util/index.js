import { config } from "../config";

let basePath =
  config.env == "local"
    ? `http://${config.LOCAL_API_URL}`
    : `https://${config.API_URL}`;

export const getDesc = (nft) => {
  let desc;
  desc = `
  🔷ID: ${nft.id}
  
  🔷Rarity score: ${nft.rarity_score.toFixed(2)}
  
  🔷Rarity rank: ${nft.rarity_rank + 1}
  `;
  return desc;
};

export const formatIpfsUrl = (id) => {
  const cid = "bafybeihrefxhkjnvdngg6o2slxafratgloxlsv3dl4xdhupd3sgprcnkuy";
  return `https://gateway.pinata.cloud/ipfs/${cid}/${id}.json`;
};

export const fetcher = (url) => fetch(url).then((r) => r.json());

export const json2query = (json) => {
  return Object.keys(json)
    .map((key) => key + "=" + json[key])
    .join("&");
};

export const formatPrice = (price) => {
  // wei = 10^18
  if (price !== "-") return (price / 10 ** 18).toFixed(2);
  else return "-";
};
