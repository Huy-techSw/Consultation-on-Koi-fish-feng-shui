import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement<any>, {
          isActive: activeTab === index,
          onClick: () => setActiveTab(index),
        })
      )}
    </div>
  );
};

export const TabsList = ({ children }: TabsProps) => (
  <div className="flex space-x-2">{children}</div>
);

interface TabsTriggerProps {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export const TabsTrigger = ({ children, onClick, isActive }: TabsTriggerProps) => (
  <button
    onClick={onClick}
    className={isActive ? 'font-bold border-b-2' : 'text-gray-500'}
  >
    {children}
  </button>
);

interface TabsContentProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const TabsContent = ({ children, isActive }: TabsContentProps) => (
  <div className={isActive ? 'block' : 'hidden'}>{children}</div>
);
