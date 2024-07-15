import React from "react";
import { HiArrowSmUp } from "react-icons/hi";

const TabsWidget = () => {
  return (
    <>
      <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="w-full">
          <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
            New products
          </h3>
          <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
            2,340
          </span>
          <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
              <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
              12.5%
            </span>
            Since last month
          </p>
        </div>
        <div class="w-full" id="new-products-chart"></div>
      </div>

      <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="w-full">
          <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
            New products
          </h3>
          <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
            2,340
          </span>
          <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
              <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
              12.5%
            </span>
            Since last month
          </p>
        </div>
        <div class="w-full" id="new-products-chart"></div>
      </div>

      <div class="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div class="w-full">
          <h3 class="text-base font-normal text-gray-500 dark:text-gray-400">
            New products
          </h3>
          <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">
            2,340
          </span>
          <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
            <span class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
              <HiArrowSmUp className="w-4 h-4" fill="currentColor" />
              12.5%
            </span>
            Since last month
          </p>
        </div>
        <div class="w-full" id="new-products-chart"></div>
      </div>
    </>
  );
};

export default TabsWidget;
