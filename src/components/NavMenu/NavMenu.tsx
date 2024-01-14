import { useState } from 'react';
import { routes } from '../../pages/_routes';
import { NavMenuLink } from './components/NavMenuLink';
import classNames from 'classnames';

export const NavMenu: React.FC = () => {
  const [routeLabelActive, setRouteLabelActive] = useState(false);
  const [routeLabel, setRouteLabel] = useState('');

  function triggerSetRouteLabel(v: string) {
    setRouteLabel(v);
    setRouteLabelActive(true);
  }

  return (
    <div className="w-full bg-slate-600 fixed flex justify-between items-center px-4">
      <NavMenuLink label="Home" path="/" />
      <div
        className="flex items-center"
        onMouseLeave={() => setRouteLabelActive(false)}
      >
        <p
          className={classNames('opacity-0 transition-all text-white', {
            'opacity-100 -translate-x-4': routeLabelActive,
          })}
        >
          {routeLabel}
        </p>
        {routes
          .filter((route) => route.showInNav)
          .map((route, index) => (
            <NavMenuLink
              key={`nav-menu-link-${index}`}
              path={route.path}
              label={route.title}
              icon={route.icon}
              setRouteLabel={triggerSetRouteLabel}
            />
          ))}
      </div>
    </div>
  );
};
