import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Input from "../../components/ui/Input";
import Option from "../../components/ui/Option";
import TextArea from "../../components/ui/TextArea";
import PanelLayout from "./PanelLayout";

const Setting = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />

        <div className="grid bg-white grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          {/* Profile */}
          <div className="col-span-full xl:col-auto">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <img
                  className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                  src="https://flowbite-admin-dashboard.vercel.app/images/logo.svg"
                  alt="Jese picture"
                />
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    Website Icon
                  </h3>
                  <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    JPG, GIF or PNG. Max size of 800K
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-4 h-4 mr-2 -ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                        <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                      </svg>
                      Upload picture
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div className="flow-root">
                <h3 className="text-xl font-semibold dark:text-white">
                  Alerts & Notifications
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  You can set up Themesberg to get notifications
                </p>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Company News
                      </div>
                      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get Themesberg news, announcements, and product updates
                      </div>
                    </div>
                    <label
                      htmlFor="company-news"
                      className="relative flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id="company-news"
                        className="sr-only"
                      />
                      <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Account Activity
                      </div>
                      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get important notifications about you or activity you've
                        missed
                      </div>
                    </div>
                    <label
                      htmlFor="account-activity"
                      className="relative flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id="account-activity"
                        className="sr-only"
                      />
                      <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4">
                    <div className="flex flex-col flex-grow">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        Meetups Near You
                      </div>
                      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get an email when a Dribbble Meetup is posted close to
                        my location
                      </div>
                    </div>
                    <label
                      htmlFor="meetups"
                      className="relative flex items-center cursor-pointer"
                    >
                      <input type="checkbox" id="meetups" className="sr-only" />
                      <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex flex-col flex-grow">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        New Messages
                      </div>
                      <div className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get Themsberg news, announcements, and product updates
                      </div>
                    </div>
                    <label
                      htmlFor="new-messages"
                      className="relative flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id="new-messages"
                        className="sr-only"
                      />
                      <span className="h-6 bg-gray-200 border border-gray-200 rounded-full w-11 toggle-bg dark:bg-gray-700 dark:border-gray-600"></span>
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Save all
                  </button>
                </div>
              </div>
              <div>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Save all
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                Tag Meta
              </h3>
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      item={{
                        id: "title",
                        name: "title",
                        label: "Title",
                        type: "text",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      item={{
                        id: "keyword",
                        name: "keyword",
                        label: "Keyword",
                        type: "text",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <TextArea
                      item={{
                        id: "description",
                        name: "description",
                        label: "Description",
                        rows: 4,
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      item={{
                        id: "author",
                        name: "author",
                        label: "Author",
                        type: "text",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      item={{
                        id: "copyright",
                        name: "copyright",
                        label: "Copyright",
                        type: "text",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      item={{
                        id: "robots",
                        name: "robots",
                        label: "Robots",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      item={{
                        id: "googlebot",
                        name: "googlebot",
                        label: "Google Bot",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      item={{
                        id: "googlebotnews",
                        name: "googlebotnews",
                        label: "Google Bot News",
                        required: true,
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-full">
                    <button
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      Save all
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default Setting;
