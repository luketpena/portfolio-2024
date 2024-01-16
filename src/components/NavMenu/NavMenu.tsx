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
    <div className="w-full bg-slate-600 fixed flex justify-center md:justify-end items-center px-4 z-50">
      <div
        className="flex justify-center items-center"
        onMouseLeave={() => setRouteLabelActive(false)}
      >
        <p
          className={classNames(
            'opacity-0 transition-all text-white hidden md:block',
            {
              'opacity-100 -translate-x-4': routeLabelActive,
            },
          )}
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
        <NavMenuLink
          path="https://www.linkedin.com/in/luke-pena-669473122/"
          label="LinkedIn"
          icon="SiLinkedin"
          setRouteLabel={triggerSetRouteLabel}
          external
        />
      </div>
    </div>
  );
};
