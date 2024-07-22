import React from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";
import { Input } from "../../../components/ui/Input";

const EditBlog = () => {
  const breadCrumbs = {
    page: "Blog Edit",
    data: [
      { page: "Blog", route: "/blog" },
      { page: "Edit", route: "/blog/edit" },
    ],
  };
  const imageClass =
    "mb-4 rounded-lg h-auto max-w-full sm:mb-0 xl:mb-4 2xl:mb-0";
  return (
    <>
      <PanelLayout>
        <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="col-span-3">
          <Card cols={6}>
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
                id={"title"}
                name={"title"}
                type={"text"}
                label={"Title"}
                required={false}
              />
            </div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default EditBlog;
