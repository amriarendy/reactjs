import React from "react";
import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { GridHorizontal, GridVertical } from "../../components/grid/Grid";
import { CardHorizontal, CardVertical } from "../../components/card/Card";

const Blank = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <GridHorizontal>
          <CardHorizontal />
          <CardHorizontal />
        </GridHorizontal>

        <GridHorizontal>
          <CardHorizontal />
          <CardHorizontal />
        </GridHorizontal>

        <GridVertical>
          <CardVertical />
          <CardVertical />
        </GridVertical>
      </PanelLayout>
    </>
  );
};

export default Blank;
