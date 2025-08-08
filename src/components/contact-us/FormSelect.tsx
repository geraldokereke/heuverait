interface FormSelectProps {
  label: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

export default function FormSelect({
  onChange,
  value,
  label,
  name,
  options,
}: FormSelectProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-800 mb-3"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900"
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>{item.label}</option>
        ))}
      </select>
    </div>
  );
}
