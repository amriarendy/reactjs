import React from "react";
import Button from "../ui/Button";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import CheckBox from "../ui/CheckBox";
import Href from "../ui/Href";

const TableBody = ({ attribute, tdata, toggleModal }) => {
  console.log('Tbody: ', tdata[0]);
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        {tdata.map((item) => (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={item.id}>
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
          {Object.keys(item).map((key) => (
            <td key={key} className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item[key]}
            </td>
          ))}
          <td className="p-4 space-x-2 whitespace-nowrap">
            {attribute.edit &&
              (attribute.edit.route === "toggleEditModal" ? (
                <Button
                  type="button"
                  label="Edit"
                  color="blue"
                  onClick={toggleModal}
                  icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
                />
              ) : (
                <Href
                  route={attribute.edit.route}
                  label="Edit"
                  color="blue"
                  icon={<FaEdit className="w-5 h-5 mr-2 -ml-1" />}
                />
              ))}
            {attribute.delete &&
              (attribute.delete.route === "toggleModal" ? (
                <Button
                  type="button"
                  label="Delete"
                  color="red"
                  onClick={toggleModal}
                  icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
                />
              ) : (
                <Href
                  route={attribute.delete.route}
                  label="Delete"
                  color="red"
                  icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
                />
              ))}
          </td>
        </tr>
          ))}
      </tbody>
    </>
  );
};

export default TableBody;
