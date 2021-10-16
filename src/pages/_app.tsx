import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@context/store';

import 'normalize.css';
import '@styles/global.scss';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
