const FormInput = ({
  label,
  name,
  placeholder,
  required = false,
  type = "input",
  eltype = "input",
  options,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  eltype?: string;
  options?: string[];
}) => {
  return (
    <div>
      <label htmlFor="fullname" className="block mb-2 text-sm font-bold">
        {label} {required && "*"}
      </label>
      {eltype === "input" && (
        <input
          type={type}
          id={name}
          name={name}
          className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
          placeholder={placeholder}
          required={required}
        />
      )}
      {eltype === "textarea" && (
        <textarea
          id={name}
          rows={6}
          name={name}
          className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300"
          placeholder={placeholder}
          required={required}
        ></textarea>
      )}
      {eltype === "select" && (
        <select
          id={name}
          name={name}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
        >
          <option selected>{placeholder}</option>
          {options?.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
        </select>
      )}
      {eltype === "radio" && (
        <>
          {options?.map((option, i) => (
            <div key={i} className="flex items-center ps-3">
              <input
                id={`option-${i}`}
                type="radio"
                value={option}
                name={name}
                className="w-4 h-4 bg-gray-100 border-gray-300 "
              />
              <label
                htmlFor={`option-${i}`}
                className="py-3 ms-2 text-sm font-medium"
              >
                {option}
              </label>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FormInput;
