import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="block mb-1 text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
};
