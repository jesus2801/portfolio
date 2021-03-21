import React from 'react';
import Layout from '../components/layout/Layout';
import { NextPageContext, NextPage } from 'next';

import Landing from '../components/layout/Landing';
import AboutSection from '../components/layout/AboutSection';
import Skills from '../components/layout/Skills';
import Projects from '../components/layout/Projects';
import ArrowUp from '../components/UI/ArrowUp';

const Index: NextPage<NextPageContext> = () => {
  return (
    <Layout title="Jesús García | Full Stack Web Developer">
      <Landing title="Jesús García" />

      <AboutSection
        life={`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Aliquid alias consequatur vero similique, 
      quisquam ullam dolor dolorum saepe voluptate iure dicta porro 
      eum doloremque quia repellendus ut molestias iusto. Reiciendis.`}
        knowledge={`Lorem ipsum, dolor sit amet consectetur 
      adipisicing elit. Aliquid alias consequatur vero similique, 
      quisquam ullam dolor dolorum saepe voluptate iure dicta porro 
      eum doloremque quia repellendus ut molestias iusto. Reiciendis.`}
      />

      <Skills
        introduction={`A synthesis of the main knowledge that I 
        have and can contribute as a web developer.`}
      />

      <Projects />

      <ArrowUp />
    </Layout>
  );
};

export default Index;
