import React from 'react';
import Layout from '../src/components/layout/Layout';
import { NextPage } from 'next';

import Landing from '../src/components/layout/Landing';
import AboutSection from '../src/components/layout/AboutSection';
import Skills from '../src/components/layout/Skills';
import Projects from '../src/components/layout/Projects';
import ArrowUp from '../src/components/UI/ArrowUp';

import { IndexCtx } from '../src/interfaces';
import { indexPageContent } from '../src/utils/indexPageContent';
import StartSection from '../src/components/UI/StartSection';
import Nav from '../src/components/UI/Nav';
import Footer from '../src/components/layout/Footer';
import ContactForm from '../src/components/layout/ContactForm';

const Index: NextPage<IndexCtx> = ({
  skillsIntroduction,
  lifeText,
  knowledgeText,
  technologiesTxt,
  backendTxt,
  reactTxt,
}) => {
  return (
    <Layout title="Jesús García's Portfolio | Full Stack Web Developer">
      <Nav />
      <StartSection />

      <Landing title="Jesús García" />

      <AboutSection life={lifeText} knowledge={knowledgeText} />

      <Skills
        introduction={skillsIntroduction}
        technologiesTxt={technologiesTxt}
        backendTxt={backendTxt}
        reactTxt={reactTxt}
      />

      <Projects />

      <ContactForm />

      <ArrowUp />

      <Footer />
    </Layout>
  );
};

Index.getInitialProps = async () => indexPageContent;

export default Index;
