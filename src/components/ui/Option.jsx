import React from "react";

const Option = () => {
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="settings-language"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select language
        </label>
        <select
          id="settings-language"
          name="countries"
          className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>English (US)</option>
          <option>Italiano</option>
          <option>Français (France)</option>
          <option>正體字</option>
          <option>Español (España)</option>
          <option>Deutsch</option>
          <option>Português (Brasil)</option>
        </select>
      </div>
    </>
  );
};

export default Option;
