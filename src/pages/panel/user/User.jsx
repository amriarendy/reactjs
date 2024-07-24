import React, {useState} from "react";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import PanelLayout from "../PanelLayout";
import Card from "../../../components/card/Card";
import Table from "../../../components/table/Table";
import { USER_FORMAT_TABLE } from "../../../libs/constants/formats/UserFormat";
import AttributeTable from "../../../components/table/AttributeTable";
import DataTable from "../../../../dummy.json"

const User = () => {
  const breadCrumbs = {
    page: "Users",
    data: [
      {page: "Users", route: "/Users"},
      {page: "List", route: "/Users"}
    ],
  };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  }

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  }
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card
            header={<AttributeTable attribute={USER_FORMAT_TABLE.attribute} cols={1} />}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={USER_FORMAT_TABLE.attribute}
                thead={USER_FORMAT_TABLE.th}
              >
                {DataTable.users.map((item) => (
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td className="max-w-sm p-4 overflow-hidden text-base font-formal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">

                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default User;
