import { ReactNode, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { routes } from '../../pages/_routes';
import { NavMenu } from '../NavMenu/NavMenu';

interface PageWrapperProps {
  children?: ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = () => {
  const location = useLocation();

  // Updating the page title to include the route name
  useEffect(() => {
    const activeRoute = routes.find(
      (route) => location.pathname === route.path,
    );
    console.log(location.pathname, activeRoute);
    if (activeRoute) {
      document.title = `Luke Peña | ${activeRoute.title}`;
    }
  }, [location.pathname]);

  return (
    <div className="h-[300vh] bg-slate-900">
      <NavMenu />
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  );
};
