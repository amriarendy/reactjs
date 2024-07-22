import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ header, footer, label, toggleModal }) => {
  useEffect(() => {
    if (toggleModal) {
      document.body.classList.add(
        "overflow-hidden",
        "bg-gray-50",
        "dark:bg-gray-800"
      );
    } else {
      document.body.classList.remove(
        "overflow-hidden",
        "bg-gray-50",
        "dark:bg-gray-800"
      );
    }
    return () => {
      document.body.classList.remove(
        "overflow-hidden",
        "bg-gray-50",
        "dark:bg-gray-800"
      );
    };
  }, [toggleModal]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 z-50 ${
          toggleModal ? "flex" : ""
        } items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full ${
          toggleModal ? "block" : "hidden"
        }`}
        id="add-user-modal"
      >
        {" "}
        {/* Dark background */}
        <div
          className={`fixed inset-0 bg-black opacity-50 ${
            toggleModal ? "block" : "hidden"
          }`}
          onClick={toggleModal}
        ></div>
        <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
              <h3 className="text-xl font-semibold dark:text-white">
                Add new user
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-red-600 bg-transparent hover:bg-red-200 hover:text-red-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-red-700 dark:hover:text-white"
                data-modal-toggle="add-user-modal"
              >
                <IoMdClose className="w-5 h-5" fill="currentColor" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <form action="#"></form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bonnie"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Green"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="example@company.com"
                    required
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="position"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="e.g. React developer"
                    required
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="biography"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Biography
                  </label>
                  <textarea
                    id="biography"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="👨‍💻Full-stack web developer. Open-source contributor."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
              >
                Add user
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
