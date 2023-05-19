import React from "react";

const InputForm = ({ type, placeholder, label, width, value, ...props }) => {
  return (
    <div>
      {/* <label>{label}</label> */}
      <input
        className="w-full rounded-2xl h-[55px] border-[1px] border-gray-veryLight text-gray placeholder:text-gray"
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputForm;
