import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'components/home';
import { NavigationLayout } from 'uikit/layouts/navigation-layout';
import { appRoutes } from 'configs/routes';
import Search from 'components/search';
import Account from 'components/account';
import ExtendedRequest from 'components/extended-request';

export const App = () => {
  return (
    <Router>
      <NavigationLayout>
        <Routes>
          <Route path={appRoutes.home} element={Home} />
          <Route path={appRoutes.account} element={Account} />
          <Route path={appRoutes.search} element={Search} />
          <Route path={appRoutes.extended.path} element={ExtendedRequest} />
        </Routes>
      </NavigationLayout>
    </Router>
  );
};

export default App;
