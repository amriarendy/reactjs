import React, {useState} from "react";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { CATEGORY_FORMAT_TABLE } from "./CATEGORY_FORMAT_TABLE";
import Modal from "../../../components/modal/Modal";

const Category = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Category", route: "/category" },
      { page: "List", route: "/category" },
    ],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card
            header={
              <AttributeTable
                attribute={CATEGORY_FORMAT_TABLE.attribute}
              />
            }
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <button type="button" onClick={toggleModal} data-modal-target="add-user-modal" data-modal-toggle="add-user-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                    show modal
                </button>
              <Table
                attribute={CATEGORY_FORMAT_TABLE.attribute}
                thead={CATEGORY_FORMAT_TABLE.th}
                tbody={CATEGORY_FORMAT_TABLE.attribute}
              />
            </div>
          </Card>
        </div>

        
          {/* Modal */}
          {isModalOpen && <Modal toggleModal={toggleModal} />}
      </PanelLayout>
    </>
    );
};

export default Category;
