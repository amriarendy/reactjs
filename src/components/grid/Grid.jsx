import React from "react";

export function GridVertical({ children }) {
  return (
    <>
      <div class="grid bg-white grid-cols-1 px-4 pt-4 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
        <div className="col-span-full xl:col-auto">{children}</div>
      </div>
    </>
  );
}

export function GridHorizontal({ children }) {
  return (
    <>
      <div className="grid bg-white gap-4 px-4 pt-4 md:grid-cols-2 xl:grid-cols-4">
        {children}
      </div>
    </>
  );
}
