import React from "react";

interface TextFieldProps {
  name: string;
  value?: any;
  onChange?: any;
  label?: string;
  type?: string;
}
const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  label
}) => (
  <>
    <input type="text" name={name} value={value} onChange={onChange} />
    <label>{label}</label>
  </>
);

export default TextField;
