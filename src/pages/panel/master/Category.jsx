import React, { useState } from "react";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { CATEGORY_FORMAT_TABLE, ADD_CATEGORY_FORMAT_MODAL, EDIT_CATEGORY_FORMAT_MODAL } from "../../../libs/constants/formats/CategoryFormat";
import Modal from "../../../components/modal/Modal";
import DataTable from "../../../../dummy.json"

const Category = () => {
  const breadCrumbs = {
    page: "Category",
    data: [
      { page: "Category", route: "/category" },
      { page: "List", route: "/category" },
    ],
  };
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  
  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
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
                toggleModal={toggleAddModal}
              />
            }
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={CATEGORY_FORMAT_TABLE.attribute}
                thead={CATEGORY_FORMAT_TABLE.th}
                tbody={CATEGORY_FORMAT_TABLE.attribute}
                tdata={DataTable.categories}
                toggleModal={toggleEditModal}
              />
            </div>
          </Card>
        </div>

        {/* Modal */}
        {isAddModalOpen && <Modal body={ADD_CATEGORY_FORMAT_MODAL} toggleModal={toggleAddModal} />}
        {isEditModalOpen && <Modal body={EDIT_CATEGORY_FORMAT_MODAL} toggleModal={toggleEditModal} />}
      </PanelLayout>
    </>
  );
};

export default Category;
