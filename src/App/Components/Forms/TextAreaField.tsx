import React from "react";

interface TextAreaFieldProps {
  name: string;
  value?: any;
  onChange?: any;
  label?: string;
  required?: boolean;
}
const TextField: React.FC<TextAreaFieldProps> = ({
  name,
  value,
  onChange,
  label,
  required
}) => (
  <>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={10}
      cols={100}
      required={required}
    />
    <label>{label}</label>
  </>
);

export default TextField;
