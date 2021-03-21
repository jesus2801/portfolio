import React from 'react';
import Layout from '../components/layout/Layout';
import { NextPage } from 'next';

import Landing from '../components/layout/Landing';
import AboutSection from '../components/layout/AboutSection';
import Skills from '../components/layout/Skills';
import Projects from '../components/layout/Projects';
import ArrowUp from '../components/UI/ArrowUp';

import { IndexCtx } from '../interfaces';
import { indexPageContent } from '../utils/indexPageContent';

const Index: NextPage<IndexCtx> = ({
  skillsIntroduction,
  lifeText,
  knowledgeText,
  technologiesTxt,
  backendTxt,
  reactTxt
}) => {
  return (
    <Layout title="Jesús García | Full Stack Web Developer">
      <Landing title="Jesús García" />

      <AboutSection life={lifeText} knowledge={knowledgeText} />

      <Skills
        introduction={skillsIntroduction}
        technologiesTxt={technologiesTxt}
        backendTxt={backendTxt}
        reactTxt={reactTxt}
      />

      <Projects />

      <ArrowUp />
    </Layout>
  );
};

Index.getInitialProps = async () => indexPageContent;

export default Index;
