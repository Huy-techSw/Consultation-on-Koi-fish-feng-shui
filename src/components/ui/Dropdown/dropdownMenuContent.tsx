// DropdownMenuContent.tsx
import React from 'react';
import { DropdownMenuContentProps } from './InterfaceDrop';

const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({ children }) => {
  return (
    <div className="dropdown-content">
      {children}
    </div>
  );
};

export default DropdownMenuContent;
