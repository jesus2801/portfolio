import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { LayoutProps } from '@interfaces/props';
import { AppCtx } from '@interfaces';

import { createMetaTags } from '@utils/metaTags';

import { linkTags } from '@utils/variables';

const Layout = ({ children, title }: LayoutProps) => {
  //description
  const desc: string = `Full stack web developer portfolio by Jesús García, 
  application development, programming, React, Next JS, Gatsby, libraries 
  and frameworks`;

  const { firebase } = useSelector((state: AppCtx) => state.database);

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
