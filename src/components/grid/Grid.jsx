import React from "react";

export function GridVertical({item, children }) {
  return (
    <>
      <div className={`grid bg-white grid-cols-1 px-4 pt-4 xl:grid-cols-${item.cols} xl:gap-4 dark:bg-gray-900`}>
        {children}
      </div>
    </>
  );
}

export function ColsVertical({item, children }) {
  return (
    <>
        <div className={`col-span-${item.cols}`}>{children}</div>
        {/* col-span-1,2,3-12 or full */}
    </>
  );
}

export function GridHorizontal( { item, children }) {
  return (
    <>
      <div className={`grid bg-white gap-4 px-4 pt-4 md:grid-cols-2 xl:grid-cols-${item.cols}`}>
        {children}
      </div>
    </>
  );
}
