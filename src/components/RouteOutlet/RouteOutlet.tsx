import { ReactNode, useMemo } from 'react';
import { Outlet, useLocation } from 'react-router';
import { routes } from '../../pages/_routes';
import { NavMenu } from '../NavMenu/NavMenu';
import { PageTitle } from '../PageTitle/PageTitle';

interface RouteOutletProps {
  children?: ReactNode;
}

export const RouteOutlet: React.FC<RouteOutletProps> = () => {
  const location = useLocation();

  const activeRoute = useMemo(() => {
    const foundRoute = routes.find((route) => location.pathname === route.path);

    // Setting the document title from the found route
    if (foundRoute && foundRoute.title) {
      document.title = `Luke Peña | ${foundRoute.title}`;
    } else {
      document.title = 'Luke Peña';
    }

    window.scrollTo(0, 0);

    return foundRoute;
  }, [location.pathname]);

  return (
    <div className="bg-gradient-to-tl from-orange-900 to-slate-800">
      <NavMenu />
      <div className="pt-10 flex flex-col min-h-[100vh]">
        {activeRoute && activeRoute.title && (
          <PageTitle label={activeRoute.title} />
        )}
        <Outlet />
      </div>
    </div>
  );
};
