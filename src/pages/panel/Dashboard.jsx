import React from "react";
import PanelLayout from "./PanelLayout";
import Chart from "../../components/chart/Chart";
import { HiArrowNarrowUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <>
      <PanelLayout>
        <Chart />
      </PanelLayout>
    </>
  );
};

export default Dashboard;
