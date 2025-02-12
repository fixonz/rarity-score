import React, { useState } from "react";

export const AttrFilter = ({ attrCount, setShowMenu }) => {
  const [expandedTrait, setExpandedTrait] = useState(null); // Track the expanded trait type

  const toggleTrait = (traitType) => {
    setExpandedTrait((prevTrait) => (prevTrait === traitType ? null : traitType)); // Toggle the expanded trait
  };

  return (
    <div className="p-4">
      <h2 className="text-white text-lg font-bold mb-2">Attributes</h2>
      {Object.entries(attrCount).map(([traitType, values]) => (
        <div key={traitType} className="mb-4">
          <div
            className="text-gray-300 hover:text-white cursor-pointer"
            onClick={() => toggleTrait(traitType)} // Toggle the trait when clicked
          >
            {traitType}
          </div>
          {expandedTrait === traitType && ( // Conditionally render trait values
            <ul className="ml-4">
              {Object.entries(values).map(([value, count]) => (
                <li key={value} className="text-gray-500 hover:text-gray-300">
                  {value} ({count})
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
