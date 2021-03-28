import React from 'react';
import Layout from '../components/layout/Layout';

import Styles from '../styles/layout/NotFound';

const NotFound = () => {
  return (
    <Layout title="404: Page Not Found">
      <Styles.MainDiv>
        <p>404</p>
        <div></div>
        <p>Page not found</p>
      </Styles.MainDiv>
    </Layout>
  );
};

export default NotFound;
