import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="border rounded-xl p-4 relative">
      {title && (
        <h2 className="absolute text-lg top-[-14px] bg-slate-800 px-4 left-8">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};
