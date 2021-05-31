import React from 'react';

import Layout from '@components/templates/Layout/Layout';

import { MainDiv } from '@styles/NotFound';

const NotFound = () => {
  return (
    <Layout title="404: Page Not Found">
      <MainDiv>
        <p>404</p>
        <div></div>
        <p>Page not found</p>
      </MainDiv>
    </Layout>
  );
};

export default NotFound;
