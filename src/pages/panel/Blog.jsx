import React from "react";
import PanelLayout from "./PanelLayout";
import Table from "../../components/table/Table";
import AttributeTable from "../../components/table/AttributeTable";

const Blog = () => {
  return (
    <>
      <PanelLayout>
        <AttributeTable />
        <Table />
      </PanelLayout>
    </>
  );
};

export default Blog;
