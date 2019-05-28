import React from "react";

interface SubmitButtonProps {
  className?: string;
  id?: string;
  type?: "submit" | "reset" | "button";
}
const SubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return (
    <button type="submit" className="btn-lrg submit-btn" id="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
