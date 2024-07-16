import React from "react";

const Button = ({ id, type, label, icon, color, modalTarget, modalToggle }) => {
  return (
    <>
      <button
        id={id}
        type={type}
        data-modal-target={modalTarget}
        data-modal-toggle={modalToggle}
        // {...(modalTarget && modalToggle ? {"data-modal-target": modalTarget, "data-modal-toggle": modalToggle} : {})}
        className={`inline-flex -center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white bg-${color}-600 rounded-lg bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 sm:w-auto dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
      >
        {icon}
        {label}
      </button>
    </>
  );
};

export default Button;

// type: string[submit, button]
// modalTarget: string[variable = modalTarget]
// modalToggle: string[variable = modalToggle]
// icon: string[null, '', svg, <ImportIcon />], 'className="w-5 h-5 mr-2 -ml-1'
// label: string
