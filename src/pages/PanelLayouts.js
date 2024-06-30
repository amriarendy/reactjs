import React, { Children } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";

export default function PanelLayouts({ children }) {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
      </div>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
      </div>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
