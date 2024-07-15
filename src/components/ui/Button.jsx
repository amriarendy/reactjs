import React from "react";

const Button = ({ item }) => {
  const iconClassName = `className="w-5 h-5 mr-2 -ml-1"`;
  const iconFill = `fill="currentColor"`;
  return (
    <>
      <button
        type={item.type}
        data-modal-target={item.modal}
        data-modal-toggle={item.modal}
        className={`inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-${item.color}-700 hover:bg-${item.color}-800 focus:ring-4 focus:ring-${item.color}-300 sm:w-auto dark:bg-${item.color}-600 dark:hover:bg-${item.color}-700 dark:focus:ring-${item.color}-800`}
      >
        {item.icon}
        <svg
          className="w-5 h-5 mr-2 -ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        {item.label}
      </button>
    </>
  );
};

export default Button;
