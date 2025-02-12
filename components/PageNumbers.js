import React from "react";
import { useRouter } from "next/router";
import { json2query } from "../util";

export const PageNumbers = (props) => {
  const router = useRouter();
  const { pages } = props;
  let { page_id = 0 } = router.query;
  page_id = parseInt(page_id);

  let pageElems = Array.from({ length: pages }, (x, i) => i + 1);
  let start = pageElems.slice(page_id, page_id + 3);
  let end = pageElems.slice(-3);

  const manyPages = () => {
    return (
      <>
        {/*  <a
          className="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={() =>
            router.push(
              `?${json2query({ ...router.query, page_id: parseInt(0) })}`
            )
          }
        >
          🏠
        </a> */}

        {start.map((val) => (
          <a
            key={val} // Added a key prop for React to efficiently update the list
            className="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() =>
              router.push(
                `?${json2query({ ...router.query, page_id: parseInt(val) })}`
              )
            }
          >
            {val}
          </a>
        ))}

        <span className="hidden sm:block mr-4 text-white font-bold py-2 px-4">
          ...
        </span>

        {end.map((val) => (
          <a
            key={val} // Added a key prop for React to efficiently update the list
            className="hidden sm:block bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() =>
              router.push(
                `?${json2query({ ...router.query, page_id: parseInt(val) })}`
              )
            }
          >
            {val}
          </a>
        ))}
      </>
    );
  };

  const fewPages = () => {
    return (
      <>
        {/* <a
          className="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={() =>
            router.push(
              `?${json2query({ ...router.query, page_id: parseInt(0) })}`
            )
          }
        >
          🏠
        </a> */}
        {pageElems.map((val) => (
          <a
            key={val} // Added a key prop for React to efficiently update the list
            className="bg-black mr-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md"
            onClick={() =>
              router.push(
                `?${json2query({ ...router.query, page_id: parseInt(val) })}`
              )
            }
          >
            {val}
          </a>
        ))}
      </>
    );
  };

  return (
    <div className="flex mt-8 cursor-pointer text-xs justify-center">
      {pageElems.length > 5 ? manyPages() : fewPages()}
    </div>
  );
};
