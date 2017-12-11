import Root from 'window-or-global';

import App from './components/app';
import Store from './stores';
import StoreProvider from './stores/provider';

import './styles';

Root.__store__ = Store.create({});

const Main = () => (
  <StoreProvider store={Root.__store__}>
    <App />
  </StoreProvider>
);

export default Main;
