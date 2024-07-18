import React from "react";
import CheckBox from "../ui/CheckBox";

const TableHeader = (thead) => {
  console.log("Table Header: ".thead);
  return (
    <>
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {/* <th scope="col" className="p-4">
            <div className="flex items-center">
              <CheckBox item={{ id: "checkbox-all" }} />
            </div>
          </th>
          <th
            scope="col"
            className="p-4 text-xs text-center text-gray-900 uppercase dark:text-gray-400"
          >
            <div className="flex items-center">No.</div>
          </th> */}
          {/* {thead.data.map((item) => (
            <th
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              Name
            </th>
          ))} */}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;
