import React from "react";

interface FormProps {
  onSubmit: any;
}
const Form: React.FC<FormProps> = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

export default Form;
