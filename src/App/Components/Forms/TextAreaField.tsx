import React from "react";

interface TextAreaFieldProps {
  name: string;
  value?: any;
  onChange?: any;
  label?: string;
}
const TextField: React.FC<TextAreaFieldProps> = ({
  name,
  value,
  onChange,
  label
}) => (
  <>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={10}
      cols={100}
    />
    <label>{label}</label>
  </>
);

export default TextField;
