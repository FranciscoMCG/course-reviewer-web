import React from "react";

interface TextFieldProps {
  name: string;
  value?: any;
  onChange?: any;
  label?: string;
  type?: string;
  required?: boolean;
}
const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  required,
  onChange,
  label
}) => (
  <>
    <input
      type="text"
      required={required}
      name={name}
      value={value}
      onChange={onChange}
    />
    <label>{label}</label>
  </>
);

export default TextField;
