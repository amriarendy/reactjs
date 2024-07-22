import React from "react";
import PanelLayout from "../PanelLayout";
import Table from "../../../components/table/Table";
import AttributeTable from "../../../components/table/AttributeTable";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { BLOG_FORMAT_TABLE } from "./TableBlog";

const Blog = () => {
  const breadCrumbs = {
    page: "Blog",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "List", route: "/blog" },
    ],
  };
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card
            header={
              <AttributeTable
                attribute={BLOG_FORMAT_TABLE.attribute}
              />
            }
            cols={1}
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <Table
                attribute={BLOG_FORMAT_TABLE.attribute}
                thead={BLOG_FORMAT_TABLE.th}
                tbody={BLOG_FORMAT_TABLE.attribute}
              />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Blog;
