import React from "react";
import { useRouter } from "next/router";
import { Tools } from "./Tools";
import { Filters } from "./Filters";
import { AttrFilter } from "./AttrFilter";
import { Search } from "./Search";

export const SideBar = (props) => {
  const router = useRouter();
  const { all_traits, attr_count, showMenu, setShowMenu } = props;

  return (
    <div
      className={`fixed top-0 left-0 sm:relative ${
        !showMenu ? "hidden" : "block"
      } sm:block border-r-2 border-gray-200 h-screen overflow-auto w-full sm:w-64 bg-black z-50`}
    >
      <Search {...router.query} setShowMenu={setShowMenu} />
      <Tools {...router.query} setShowMenu={setShowMenu} />
      <Filters allTraits={all_traits} setShowMenu={setShowMenu} />
      <AttrFilter attrCount={attr_count} setShowMenu={setShowMenu} />
    </div>
  );
};
