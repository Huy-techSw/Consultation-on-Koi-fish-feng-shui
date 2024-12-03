// DropdownMenuItem.tsx
import React from 'react';
import { DropdownMenuItemProps } from './InterfaceDrop';

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ onClick, children }) => {
  return (
    <div className="dropdown-item" onClick={onClick}>
      {children}
    </div>
  );
};

export default DropdownMenuItem;
