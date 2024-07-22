import React from "react";
import Button from "../ui/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import CheckBox from "../ui/CheckBox";
import { Link } from "react-router-dom";

const TableBody = ({ attribute }) => {
  console.log('Tbody: ', attribute.edit.route);
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
          {attribute.checkbox && (
            <td className="w-4 p-4">
              <div className="flex items-center">
                <CheckBox item={{ id: "checkbox-1" }} />
              </div>
            </td>
          )}
          {attribute.checkbox && (
            <td className="w-4 p-4">
              <div className="flex items-center">1.</div>
            </td>
          )}
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
            {attribute.edit && (
              <Link to={attribute.edit.route}>
                <Button
                  id={"btnEdit"}
                  type={"button"}
                  label={"Edit"}
                  color={"blue"}
                  icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
                />
              </Link>
            )}
            {attribute.delete && (
              <Link to={attribute.delete.route}>
                <Button
                  id={"btnDestroy"}
                  type={"button"}
                  label={"Delete"}
                  color={"red"}
                  icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
                />
              </Link>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableBody;
