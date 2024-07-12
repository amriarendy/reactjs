import { IoIosSettings } from "react-icons/io";
import { HiTrash, HiDotsVertical } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";

const WidgetAttributeTable = () => {
  return (
    <>
      <div className="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
        <a
          href="#"
          className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <IoIosSettings className="w-6 h-6" fill="currentColor" />
        </a>
        <a
          href="#"
          className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <HiTrash className="w-6 h-6" fill="currentColor" />
        </a>
        <a
          href="#"
          className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <RiErrorWarningFill className="w-6 h-6" fill="currentColor" />
        </a>
        <a
          href="#"
          className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <HiDotsVertical className="w-6 h-6" fill="currentColor" />
        </a>
      </div>
    </>
  );
};

export default WidgetAttributeTable;
