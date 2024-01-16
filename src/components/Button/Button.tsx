import classNames from 'classnames';
import Icon, { IconName } from '../Icon/Icon';

interface ButtonProps {
  label: string;
  icon?: IconName;
  onClick?: () => void;
  href?: string;
  backgroundColor?: string;
  color?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  onClick,
  href,
  backgroundColor,
  color,
  className,
}) => {
  if (href) {
    return (
      <a
        onClick={onClick}
        className={classNames(
          className,
          'bg-orange-600 w-max px-6 py-4 rounded-lg flex justify-center items-center gap-4 cursor-pointer hover:brightness-125 hover:scale-[102%] transition-all',
        )}
        style={{
          backgroundColor,
          color,
        }}
        href={href}
        target="_blank"
      >
        {icon && <Icon name={icon} />}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick}>
      {icon && <Icon name={icon} />}
      {label}
    </button>
  );
};
