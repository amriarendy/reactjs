import React from "react";
import Paginate from "../pagination/Paginate";
import Button from "../ui/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import CheckBox from "../ui/CheckBox";

const Table = () => {
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <CheckBox item={{ id: "checkbox-all" }} />
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Biography
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <CheckBox item={{ id: "checkbox-1" }} />
                      </div>
                    </td>
                    <td class="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      <img
                        class="w-10 h-10 rounded-full"
                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                        alt="Neil Sims - avatar"
                      />
                      <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <div class="text-base font-semibold text-gray-900 dark:text-white">
                          Neil Sims
                        </div>
                        <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
                          neil.sims@flowbite.com
                        </div>
                      </div>
                    </td>
                    <td class="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      I love working with React and Flowbites to ...
                    </td>
                    <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Software Developers
                    </td>
                    <td class="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      United States
                    </td>
                    <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      <div class="flex items-center"></div>
                    </td>
                    <td class="p-4 space-x-2 whitespace-nowrap">
                      <Button
                        item={{
                          id: "btnEdit",
                          type: "button",
                          label: "Edit",
                          color: "blue",
                          icon: <FaEdit className="w-5 h-5 mr-2 -ml-1" />,
                        }}
                      />
                      <Button
                        item={{
                          id: "btnDelete",
                          type: "button",
                          label: "Delete",
                          color: "red",
                          icon: (
                            <FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />
                          ),
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* paginate */}
      <Paginate />
    </>
  );
};

export default Table;
