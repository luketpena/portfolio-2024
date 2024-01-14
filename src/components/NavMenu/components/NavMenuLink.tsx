import classNames from 'classnames';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Icon, { IconName } from '../../Icon/Icon';

interface NavMenuLinkProps {
  path: string;
  label: string;
  setRouteLabel?: (v: string) => void;
  icon?: IconName;
}

export const NavMenuLink: React.FC<NavMenuLinkProps> = ({
  path,
  label,
  setRouteLabel,
  icon,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo(() => {
    return location.pathname === path;
  }, [location.pathname, path]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    navigate(path);
  }

  function handleHover() {
    if (setRouteLabel) {
      setRouteLabel(label);
    }
  }

  return (
    <a
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={classNames(
        'cursor-pointer hover:bg-white/25 p-2 transition-all border-b-2 border-transparent text-white',
        {
          '!border-orange-500': isActive,
        },
      )}
    >
      {icon ? <Icon name={icon} /> : label}
    </a>
  );
};
