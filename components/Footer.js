import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaDiscord, FaEthereum } from "react-icons/fa"; // Import Discord and Ethereum icons

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-green-500 transition-colors duration-200"
        href="https://x.com/Abstract_Pepes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <IoLogoTwitter />
        </span>
        {/* Twitter */}
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-green-500 transition-colors duration-200"
        href="https://discord.gg/ZutUw5Va"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <FaDiscord />
        </span>
        {/* Discord */}
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-green-500 transition-colors duration-200"
        href="https://abscan.org/address/0xc97cbba151ed084ed49a0c53b93a8f2e805c5489"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-lg mr-1 text-green-400 hover:text-green-500">
          <FaEthereum />
        </span>
        {/* AbSCAN */}
      </a>
    </div>
  );
};
