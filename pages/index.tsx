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
import StartSection from '../components/UI/StartSection';
import Nav from '../components/UI/Nav';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/layout/ContactForm';

const Index: NextPage<IndexCtx> = ({
  skillsIntroduction,
  lifeText,
  knowledgeText,
  technologiesTxt,
  backendTxt,
  reactTxt,
}) => {
  return (
    <Layout title="Jesús García | Full Stack Web Developer">
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
