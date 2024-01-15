import { ReactNode } from 'react';
import Icon, { IconName } from '../Icon/Icon';

interface HighlightProps {
  title?: string;
  subtitle?: string;
  icon?: IconName;
  children?: ReactNode;
  unfocusImg?: boolean;
  color: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  color,
  title,
  subtitle,
  icon,
  children,
}) => {
  return (
    <div className="-mx-4 grid shadow-lg relative">
      <div className="bg-slate-700 p-4">
        <div className="flex items-center gap-1 md:gap-4 flex-col md:flex-row">
          <div className="flex items-center gap-2">
            {icon && <Icon name={icon} size="48px" color={color} />}
            {title && (
              <h3 className="text-3xl" style={{ color }}>
                {title}
              </h3>
            )}
          </div>
          {subtitle && <h4 className="text-lg text-slate-400">{subtitle}</h4>}
        </div>
        <div className="border-b my-2 border-slate-800" />
        <div>{children}</div>
      </div>
    </div>
  );
};
