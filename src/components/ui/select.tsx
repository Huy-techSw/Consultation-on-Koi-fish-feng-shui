// src/components/Select.tsx
import React from 'react';


export interface SelectProps {
  children: React.ReactNode;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export const Select = ({ children, disabled, onValueChange, defaultValue }: SelectProps) => (
  <div className={`select ${disabled ? 'disabled' : ''}`}>
    {children}
  </div>
);

export const SelectTrigger = ({ children }: { children: React.ReactNode }) => (
  <button className="select-trigger">{children}</button>
);

export const SelectContent = ({ children }: { children: React.ReactNode }) => (
  <div className="select-content">{children}</div>
);

export const SelectItem = ({ value, children }: { value: string, children: React.ReactNode }) => (
  <div className="select-item" data-value={value}>
    {children}
  </div>
);

export const SelectValue = ({ children }: { children: React.ReactNode }) => (
  <span className="select-value">{children}</span>
);
