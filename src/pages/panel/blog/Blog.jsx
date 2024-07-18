import React from "react";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { BLOG_FORMAT_TABLE } from "./TableBlog";

const TH_FORMAT = BLOG_FORMAT_TABLE;

const Blog = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <div className="col-span-3">
          <Card header={<AttributeTable route={"/blog/add"} />} cols={1}>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table th={TH_FORMAT} />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Blog;
