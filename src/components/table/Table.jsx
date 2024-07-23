import React from "react";
import Paginate from "../pagination/Paginate";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ attribute, thead, tbody, tdata, toggleModal }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <TableHeader thead={thead} attribute={attribute} />
                <TableBody
                  tbody={tbody}
                  attribute={attribute}
                  tdata={tdata}
                  toggleModal={toggleModal}
                />
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* paginate */}
      {attribute.paginate && <Paginate />}
    </>
  );
};

export default Table;
