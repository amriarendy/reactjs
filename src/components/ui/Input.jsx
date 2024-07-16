import React from "react";

const Input = ({ id, label, type, name, placeholder, required }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type} // [text,number,email]
        name={name}
        id={id}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        {...(required ? { required: true } : {})}
      />
    </>
  );
};

// const InputFile = ({ id, label, name, placeholder, required, help }) => {
//   return (
//     <>
//       <label
//         htmlFor={id}
//         className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//       >
//         {label}
//       </label>
//       <input
//         type='file'
//         name={name}
//         id={id}
//         className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby={id}
//         placeholder={placeholder}
//         {...(required ? { required: true } : {})}
//       />
//       <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id={id}>{help}.</p>
//     </>
//   );
// };

export default Input;
