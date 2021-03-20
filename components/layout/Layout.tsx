import React from 'react';
import { Helmet } from 'react-helmet';
import { NextPage } from 'next';
import { LayoutContext } from '../../interfaces';
import { createMetaTags, linkTags } from '../../utils/variables';

const Layout: NextPage<LayoutContext> = ({ children, title }) => {
  //description
  const desc =
    'Full stack web developer portfolio by Jesús García, application development, programming, React, Next JS, Gatsby, libraries and frameworks';

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="Jesús García's Portfolio"
        meta={createMetaTags(title, desc)}
        title={title}
        link={linkTags}
      />
      {/* <meta property="og:image" content=""/> */}
      {children}
    </>
  );
};

export default Layout;
