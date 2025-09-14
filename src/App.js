import { Routes, Route } from 'react-router';

import ErrorBoundary from './ErrorBoundary';
import Home from './containers/Home';
import NotFoundPage from './containers/NotFoundPage';

import './App.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default App;
