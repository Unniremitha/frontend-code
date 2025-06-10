import React from 'react';
// components/FormField.js

const FormField = ({ label, id, value, onChange, type = "text", placeholder }) => (
  <div className="relative mt-4">
    <label
      htmlFor={id}
      className="absolute -top-2 left-3 bg-white px-1 text-sm text-black-800 font-medium"
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder || label}
      className="w-full mt-3 border border-gray-300 rounded-md p-2 focus:outline-pink-500"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default FormField;
