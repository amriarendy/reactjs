import React from "react";
import { TiPlus } from "react-icons/ti";
import { FaFileDownload } from "react-icons/fa";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const AttributeTable = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="p-4 bg-white block sm:flex items-center justify-between dark:bg-gray-800">
        <div className="w-full mb-1">
          <div className="sm:flex">
            <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
              <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="users-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="users-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search for users"
                  />
                </div>
              </form>
              {/* you can add components widget attribute table here */}
            </div>
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              <button
                type="button"
                data-modal-target="add-user-modal"
                data-modal-toggle="add-user-modal"
                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <TiPlus className="w-5 h-5 mr-2 -ml-1" fill="currentColor" />
                Add user
              </button>
              <a
                href="#"
                className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <FaFileDownload
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="currentColor"
                />
                Export
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttributeTable;
