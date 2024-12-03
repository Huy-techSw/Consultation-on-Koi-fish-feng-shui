// DropdownMenuTrigger.tsx
import React from 'react';
import { DropdownMenuTriggerProps } from './InterfaceDrop';

const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ onClick, children }) => {
  return (
    <button className="dropdown-trigger" onClick={onClick}>
      {children}
    </button>
  );
};

export default DropdownMenuTrigger;
