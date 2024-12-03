// DropdownMenu.tsx
import React, { useEffect, useRef } from 'react';

import './DropdownMenu.styles.css';
import { DropdownMenuProps } from './InterfaceDrop';

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onClose, children }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="dropdown-menu" ref={menuRef}>
      {children}
    </div>
  );
};

export default DropdownMenu;
