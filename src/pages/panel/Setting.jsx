import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { FaSave, FaRegTrashAlt } from "react-icons/fa";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Option from "../../components/ui/Option";
import TextArea from "../../components/ui/TextArea";
import PanelLayout from "./PanelLayout";
import Radio from "../../components/ui/Radio";
import { ColsVertical, GridVertical } from "../../components/grid/Grid";

const Setting = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />

        <GridVertical item={{ cols: 3 }}>
          <ColsVertical item={{ cols: 1 }}>
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
                    <Button
                      id={"btnSave"}
                      type={"button"}
                      label={"Save"}
                      color={"blue"}
                      icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                    />
                    <Button
                      id={"btnSave"}
                      type={"button"}
                      label={"Delete"}
                      color={"red"}
                      icon={<FaRegTrashAlt className="w-5 h-5 mr-2 -ml-1" />}
                    />
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
                    <Radio item={{ id: "company-news" }} />
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
                    <Radio item={{ id: "account-activity" }} />
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
                    <Radio item={{ id: "meetups" }} />
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
                    <Radio item={{ id: "new-messages" }} />
                  </div>
                </div>
              </div>
            </div>
          </ColsVertical>

          <ColsVertical item={{ cols: 2 }}>
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                Tag Meta
              </h3>
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      id={"title"}
                      name={"title"}
                      type={"text"}
                      label={"Title"}
                      required={false}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      id={"keyword"}
                      name={"keyword"}
                      type={"text"}
                      label={"Keyword"}
                      required={false}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <TextArea
                      id={"description"}
                      name={"description"}
                      label={"Description"}
                      rows={4}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      id={"author"}
                      name={"author"}
                      type={"text"}
                      label={"Author"}
                      required={false}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Input
                      id={"copyright"}
                      name={"copyright"}
                      type={"text"}
                      label={"Copyright"}
                      required={false}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      id={"robots"}
                      name={"robots"}
                      label={"Robots"}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      id={"googlebot"}
                      name={"googlebot"}
                      label={"Google Bot"}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Option
                      id={"googlebotnews"}
                      name={"googlebotnews"}
                      label={"Google Bot News"}
                      required={true}
                    />
                  </div>
                  <div className="col-span-6 sm:col-full">
                    <Button
                      id={"btnSave"}
                      type={"button"}
                      label={"Save"}
                      color={"blue"}
                      icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                    />
                  </div>
                </div>
              </form>
            </div>
          </ColsVertical>
        </GridVertical>
      </PanelLayout>
    </>
  );
};

export default Setting;
