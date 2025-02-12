import React from "react";
import { formatIpfsUrl } from "../util";
import { config } from "../config";

export const NFT = (nft) => {
  return (
    <>
      <a
        className="text-left w-24 relative // Add relative positioning
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/token/${nft.id}`}
      >
        <img
          src={nft.image}
          className="rounded-md h-auto bg-black"
          alt={nft.name}
        />
         <span
          className="absolute top-1 right-1 // Position the rank badge
              text-white px-0.5 py-0.5 font-medium text-[0.6rem] rounded-md bg-yellow-100/75 text-yellow-600"
        >
          #{nft.rarity_rank + 1}
        </span>
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-white">#{nft.id}</h3>
        </div>
      </a>
    </>
  );
};
