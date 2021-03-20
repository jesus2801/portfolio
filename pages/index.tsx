import React from 'react';
import Layout from '../components/layout/Layout';
import { NextPageContext, NextPage } from 'next';
import Landing from '../components/layout/Landing';
import AboutSection from '../components/layout/AboutSection';
import Skills from '../components/layout/Skills';

const Index: NextPage<NextPageContext> = () => {
  return (
    <Layout title="Jesús García | Full Stack Web Developer">
      <Landing />
      <AboutSection />
      <Skills />
    </Layout>
  );
};

export default Index;
