export function CardVertical() {
  return (
    <>
      <div className="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card header</h3>
        </div>
        <div className="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card body</h3>
        </div>
        <div className="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card footer</h3>
        </div>
      </div>
    </>
  );
}

export function CardHorizontal() {
  return (
    <>
      <div className="p-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card header</h3>
        </div>
        <div className="h-16 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card body</h3>
        </div>
        <div className="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600">
          <h3>Card footer</h3>
        </div>
      </div>
    </>
  );
}
