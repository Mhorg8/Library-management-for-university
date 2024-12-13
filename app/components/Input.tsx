import React, { forwardRef } from "react";

type Props = {
  type: "email" | "text" | "password";
  placeholder: string;
  containerStyle?: string;
  inputStyle?: string;
  name: string;
  label: string;
};

const Input = forwardRef(
  (
    { type, placeholder, label, inputStyle, containerStyle, name }: Props,
    ref
  ) => {
    return (
      <div className={`flex flex-col ${containerStyle} w-full`}>
        <label htmlFor={name} className="capitalize font-semibold text-sm">
          {label}
        </label>
        <input
          type={type}
          required
          placeholder={placeholder}
          className={`${inputStyle} bg-softGray py-3 w-full rounded-md shadow-sm px-2 focus:outline-lightBlue`}
          name={name}
          ref={ref}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
