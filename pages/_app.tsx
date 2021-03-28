import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../src/context/store';

import 'normalize.css';
import '../src/styles/global.scss';

// v 1.0.0
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
