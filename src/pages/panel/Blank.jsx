import React from "react";
import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Card from "../../components/card/Card";

const Blank = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <div className="col-span-full xl:col-auto">
          <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
            <p>col-span-full xl:col-auto</p>
          </Card>
        </div>
        <div className="col-span-2">
          <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
            <p>col-span-2</p>
          </Card>
        </div>
        <div className="col-span-3">
          <Card header={"Card Header"} footer={"Card Footer"} cols={2}>
            <div className="col-span-1">col-span-3</div>
            <div className="col-span-1">col-span-3</div>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Blank;
