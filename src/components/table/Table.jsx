import React from "react";
import Paginate from "../pagination/Paginate";
import Button from "../ui/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import CheckBox from "../ui/CheckBox";

const Table = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <CheckBox item={{ id: "checkbox-all" }} />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Biography
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <CheckBox item={{ id: "checkbox-1" }} />
                      </div>
                    </td>
                    <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                      <img
                        className="w-10 h-10 rounded-full"
                        src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png"
                        alt="Neil Sims - avatar"
                      />
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        <div className="text-base font-semibold text-gray-900 dark:text-white">
                          Neil Sims
                        </div>
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          neil.sims@flowbite.com
                        </div>
                      </div>
                    </td>
                    <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                      I love working with React and Flowbites to ...
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Software Developers
                    </td>
                    <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      United States
                    </td>
                    <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                      <div className="flex items-center"></div>
                    </td>
                    <td className="p-4 space-x-2 whitespace-nowrap">
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
