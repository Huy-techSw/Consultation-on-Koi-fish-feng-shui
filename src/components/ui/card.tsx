import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`bg-white shadow rounded-lg p-6 ${className || ''}`}>{children}</div>
)

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={`border-b pb-4 ${className || ''}`}>{children}</div>
)

export const CardTitle = ({ children, className }: CardProps) => (
  <h2 className={`text-xl font-semibold ${className || ''}`}>{children}</h2>
)

export const CardDescription = ({ children, className }: CardProps) => (
  <p className={`text-gray-600 ${className || ''}`}>{children}</p>
)

export const CardContent = ({ children, className }: CardProps) => (
  <div className={`pt-4 ${className || ''}`}>{children}</div>
)
