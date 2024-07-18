import React from "react";
import { FaFileDownload, FaPlus } from "react-icons/fa";
import { Input, InputFile, InputSearch } from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const AttributeTable = ({ route }) => {
  return (
    <>
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 bg-white dark:bg-gray-900">
        <div>
          <Link to={route}>
            <Button
              id="dropdownActionButton"
              type="button"
              label="Add"
              color="blue"
              icon={<FaPlus className="w-5 h-5 mr-3 -ml-1" />}
            />
          </Link>
        </div>
        <div className="relative">
          <InputSearch />
        </div>
      </div>
    </>
  );
};

export default AttributeTable;
