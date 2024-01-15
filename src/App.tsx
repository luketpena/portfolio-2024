import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './pages/_routes';
import { RouteOutlet } from './components/RouteOutlet/RouteOutlet';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route element={<RouteOutlet />}>
            {routes.map((route, index) => (
              <Route
                key={`nav-route-${index}`}
                element={route.element}
                path={route.path}
              />
            ))}
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
