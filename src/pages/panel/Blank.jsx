import React from "react";
import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { ColsVertical, GridHorizontal, GridVertical } from "../../components/grid/Grid";
import { CardHorizontal, CardVertical } from "../../components/card/Card";

const Blank = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <GridHorizontal item={{ cols: 5 }}>
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
          <CardHorizontal />
        </GridHorizontal>

        <GridVertical item={{ cols: 4 }}>
          <ColsVertical item={{ cols: 1 }}>
            <CardVertical />
          </ColsVertical>
          <ColsVertical item={{ cols: 1 }}>
            <CardVertical />
          </ColsVertical>
        </GridVertical>
      </PanelLayout>
    </>
  );
};

export default Blank;
