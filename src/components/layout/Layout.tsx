import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NextPage } from 'next';

import { AppCtx, LayoutContext } from '../../interfaces';
import { linkTags } from '../../utils/variables';
import { useSelector } from 'react-redux';
import { createMetaTags } from '../../utils/metaTags';

const Layout: NextPage<LayoutContext> = ({ children, title }) => {
  //description
  const desc: string = `Full stack web developer portfolio by Jesús García, 
  application development, programming, React, Next JS, Gatsby, libraries 
  and frameworks`;

  const firebase = useSelector(
    (state: AppCtx) => state.database.firebase
  );

  useEffect(() => {
    firebase.registerVisit(window.location.href);
  });

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="Jesús García's Portfolio"
        meta={createMetaTags(title, desc)}
        title={title}
        link={linkTags}
      />
      {children}
    </>
  );
};

export default Layout;
