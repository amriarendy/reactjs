import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ item }) => {
  return (
    <>
      <li>
        <Link
          to={item.route}
          className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {item.icon}
          <span className="ml-3">{item.label}</span>
        </Link>
      </li>
    </>
  );
};

export default MenuList;
