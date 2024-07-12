import React from "react";
import { IoMdHome, IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = () => {
  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between dark:bg-gray-800">
        <div className="mb-4 col-span-full xl:mb-2">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
                >
                  <IoMdHome className="w-5 h-5 mr-2.5" fill="currentColor" />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <IoIosArrowForward
                    className="w-5 h-5 mr-2.5"
                    fill="currentColor"
                  />
                  <a
                    href="#"
                    className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                  >
                    Users
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <IoIosArrowForward
                    className="w-5 h-5 mr-2.5"
                    fill="currentColor"
                  />
                  <a
                    href="#"
                    className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                  >
                    List
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
            All users
          </h1>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
