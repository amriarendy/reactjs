import React from "react";
import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { ColsVertical, GridVertical } from "../../../components/grid/Grid";
import { CardVertical } from "../../../components/card/Card";
import { FaSave } from "react-icons/fa";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import TextArea from "../../../components/ui/TextArea";
import Option from "../../../components/ui/Option";

const AddBlog = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <GridVertical item={{ col: 1 }}>
          <ColsVertical item={{ col: 1 }}>
            <CardVertical
              header={"Header"}
              footer={
                <Button
                  id={"btnSave"}
                  type={"button"}
                  label={"Save"}
                  color={"blue"}
                  icon={<FaSave className="w-5 h-5 mr-2 -ml-1" />}
                />
              }
              cols={2}
            >
              <div className="col-span-2">
                <Input
                  id={"title"}
                  name={"title"}
                  type={"text"}
                  label={"Title"}
                  required={false}
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  id={"description"}
                  name={"description"}
                  label={"Description"}
                  rows={4}
                  required={true}
                />
              </div>
              <div className="col-span-1">
                <Option
                  id={"category"}
                  name={"category"}
                  label={"Categories"}
                  required={true}
                />
              </div>
              <div className="col-span-1">
                <Option
                  id={"tag"}
                  name={"tag"}
                  label={"Hashtag"}
                  required={true}
                />
              </div>
              <div className="col-span-2">
                <TextArea
                  id={"body"}
                  name={"body"}
                  label={"Body"}
                  rows={4}
                  required={true}
                />
              </div>
              <div className="col-span-1">
                <Input
                  id={"thumbnail"}
                  name={"thumbnail"}
                  type={"text"}
                  label={"Thumbnail"}
                  required={false}
                />
              </div>
              <div className="col-span-1">
                <Input
                  id={"file"}
                  name={"file"}
                  type={"text"}
                  label={"File"}
                  required={false}
                />
              </div>
              <div className="col-span-2">
                <Input
                  id={"slug"}
                  name={"slug"}
                  type={"text"}
                  label={"Slug"}
                  required={false}
                />
              </div>
            </CardVertical>
          </ColsVertical>
        </GridVertical>
      </PanelLayout>
    </>
  );
};

export default AddBlog;
