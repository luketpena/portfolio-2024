import classNames from 'classnames';
import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  align,
  className,
}) => {
  return (
    <div
      className={classNames(
        'border border-slate-600 rounded-xl p-4 pt-6 relative',
        className,
        {
          'text-left': align === 'left',
          'text-right': align === 'right',
        },
      )}
    >
      {title && (
        <h2
          className={classNames(
            'absolute text-lg top-[-14px] flex items-center gap-4 bg-slate-600 rounded-full px-4 text-orange-400',
            {
              'left-8': align === 'left',
              'right-8': align === 'right',
            },
          )}
        >
          <span>{title}</span>
          {subtitle && (
            <span className="text-slate-500 text-sm">{subtitle}</span>
          )}
        </h2>
      )}
      {children}
    </div>
  );
};
