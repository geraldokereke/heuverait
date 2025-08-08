import React from "react";

interface FormTextareaProps {
  label: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  name: string;
  placeholder?: string;
}

export default function FormTextarea({
  label,
  onChange,
  value,
  name,
  placeholder,
}: FormTextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-800 mb-3"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        required
        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-none"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}