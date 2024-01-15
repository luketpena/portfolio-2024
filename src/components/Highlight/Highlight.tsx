import classNames from 'classnames';
import { ReactNode } from 'react';
import Icon, { IconName } from '../Icon/Icon';

interface HighlightProps {
  title?: string;
  subtitle?: string;
  icon?: IconName;
  img?: string;
  children?: ReactNode;
  unfocusImg?: boolean;
  color: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  color,
  title,
  subtitle,
  icon,
  img,
  children,
  unfocusImg,
}) => {
  return (
    <div
      className={classNames('-mx-4 grid shadow-lg relative', {
        'grid-cols-[1fr_3fr]': !!img,
      })}
    >
      {img && (
        <div className="w-full h-full overflow-hidden">
          <div
            className={classNames('bg-cover relative w-full h-full', {
              'brightness-50 scale-125 blur-sm': unfocusImg,
            })}
            style={{
              backgroundImage: `url("${img}")`,
            }}
          >
            {unfocusImg && (
              <div
                className="absolute left-0 top-0 w-full h-full mix-blend-color"
                style={{ backgroundColor: color }}
              />
            )}
          </div>
        </div>
      )}

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
