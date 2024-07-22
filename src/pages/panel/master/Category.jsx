import React, { useState } from "react";
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
                toggleModal={toggleModal}
              />
            }
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={CATEGORY_FORMAT_TABLE.attribute}
                thead={CATEGORY_FORMAT_TABLE.th}
                tbody={CATEGORY_FORMAT_TABLE.attribute}
                toggleModal={toggleModal}
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
