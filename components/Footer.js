import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="flex flex-col border-t-1 border w-full p-4 mt-4 items-center text-xs justify-center">
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://x.com/Abstract_Pepes"
        target="_blank"
      >
        <span className="text-lg mr-1">

          </span>
        Twitter
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://discord.gg/ZutUw5Va"
        target="_blank"
      >
        <span className="text-lg mr-1">
          
        </span>
        Discord
      </a>
      <a
        className="flex items-center mb-4 text-gray-600 hover:text-gray-900"
        href="https://abscan.org/address/0xc97cbba151ed084ed49a0c53b93a8f2e805c5489"
        target="_blank"
      >
        <span className="text-lg mr-1">

        </span>
        AbSCAN
      </a>
    </div>
  );
};
