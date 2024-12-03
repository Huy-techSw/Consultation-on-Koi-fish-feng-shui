// src/components/Avatar.tsx
import React from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const Avatar = ({ src, alt, fallback, children, className }: AvatarProps) => (
    <div className={`avatar ${className}`}>
      {src ? (
        <img className="avatar-image" src={src} alt={alt} />
      ) : (
        <div className="avatar-fallback">{fallback}</div>
      )}
      {children} {/* Render children nếu có */}
    </div>
  );

export const AvatarImage = ({ src, alt }: { src: string; alt: string }) => (
  <img className="avatar-image" src={src} alt={alt} />
);

export const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <div className="avatar-fallback">{children}</div>
);
