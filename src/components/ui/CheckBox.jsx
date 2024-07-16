const CheckBox = (item) => {
  return (
    <>
      <input
        id={`checkbox-${item.id}`}
        aria-describedby="checkbox-1"
        type="checkbox"
        class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={`checkbox-${item.id}`} class="sr-only">
        checkbox
      </label>
    </>
  );
};

export default CheckBox;
