const InputFile = ({ id, label, name, placeholder, required, help }) => {
    return (
        <>
              <label
                    htmlFor={id}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    {label}
                </label>
                <input
                    type='file'
                    name={name}
                    id={id}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby={id}
                    placeholder={placeholder}
                    {...(required ? { required: true } : {})}
                />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id={id}>{help}</p>
        </>
    )
}

export default InputFile;