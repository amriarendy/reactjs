import React from "react";
import { FaFileDownload, FaPlus } from "react-icons/fa";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

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
                  <Input
                    id={"search"}
                    name={"search"}
                    type={"text"}
                    placeholder={"Search blog"}
                    required={false}
                  />
                </div>
              </form>
              {/* you can add components widget attribute table here */}
            </div>
            <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
              <Link to={"/blog/add"}>
                <Button
                  id="btnSave"
                  type="button"
                  label="Add"
                  color="blue"
                  icon={<FaPlus className="w-5 h-5 mr-2 -ml-1" />}
                />
              </Link>
              <Link to={"/blog/add"}>
                <Button
                  id="btnSave"
                  type="button"
                  label="Export"
                  color="blue"
                  icon={<FaFileDownload className="w-5 h-5 mr-2 -ml-1" />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttributeTable;
