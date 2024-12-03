// DropdownMenu.types.ts
export interface DropdownMenuProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  
  export interface DropdownMenuTriggerProps {
    onClick: () => void;
    children: React.ReactNode;
  }
  
  export interface DropdownMenuContentProps {
    children: React.ReactNode;
  }
  
  export interface DropdownMenuItemProps {
    onClick: () => void;
    children: React.ReactNode;
  }
  