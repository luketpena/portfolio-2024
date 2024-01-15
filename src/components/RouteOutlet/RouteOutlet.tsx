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
    if (foundRoute) {
      document.title = `Luke Peña | ${foundRoute.title}`;
    }

    return foundRoute;
  }, [location.pathname]);

  return (
    <div className="min-h-[100vh] bg-gray-800">
      <NavMenu />
      <div className="p-4 pt-14 flex flex-col gap-4">
        {activeRoute && <PageTitle label={activeRoute.title} />}
        <Outlet />
      </div>
    </div>
  );
};
