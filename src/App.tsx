import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './pages/_routes';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageWrapper />}>
          {routes.map((route, index) => (
            <Route
              key={`nav-route-${index}`}
              element={route.element}
              path={route.path}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
