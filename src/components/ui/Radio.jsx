import React from "react";

const Radio = ({ item }) => {
  return (
    <>
      <label
        htmlFor={item.id}
        className="relative flex items-center cursor-pointer"
      >
        <input type="checkbox" id={item.id} className="sr-only" />
        <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
      </label>
    </>
  );
};

export default Radio;
