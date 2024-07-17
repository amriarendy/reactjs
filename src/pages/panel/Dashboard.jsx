import React from "react";
import PanelLayout from "./PanelLayout";
import Chart from "../../components/chart/Chart";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import TabsWidget from "../../components/chart/TabsWidget";

const Dashboard = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <div className="grid bg-white grid-cols-1 px-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <TabsWidget />
        </div>

        <div className="grid px-4 pt-6 bg-white grid-cols-1 px-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <Chart />
        </div>
      </PanelLayout>
    </>
  );
};

export default Dashboard;
