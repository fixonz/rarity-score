import React from "react";
import { IoLogoTwitter } from "react-icons/io";
import { FaDiscord, FaEthereum } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex border-t-1 border w-full p-4 mt-4 items-center justify-center">
      <a
        className="flex items-center mx-2 text-white hover:text-green-500 transition-colors duration-200"
        href="https://x.com/Abstract_Pepes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <IoLogoTwitter />
        </span>
        Twitter
      </a>
      <a
        className="flex items-center mx-2 text-white hover:text-green-500 transition-colors duration-200"
        href="https://discord.gg/ZutUw5Va"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <FaDiscord />
        </span>
        Discord
      </a>
      <a
        className="flex items-center mx-2 text-white hover:text-green-500 transition-colors duration-200"
        href="https://abscan.org/address/0xc97cbba151ed084ed49a0c53b93a8f2e805c5489"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <FaEthereum />
        </span>
        AbstractScan
      </a>
    </div>
  );
};
