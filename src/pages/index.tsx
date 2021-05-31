import React from 'react';
import Layout from '../components/templates/Layout/Layout';
import { NextPage } from 'next';

import Landing from '../components/organisms/Landing/Landing';
import AboutSection from '../components/organisms/AboutSection/AboutSection';
import Skills from '../components/organisms/Skills/Skills';
import Projects from '../components/organisms/Projects/Projects';
import ArrowUp from '../components/atoms/ArrowUp/ArrowUp';

import { IndexCtx } from '../interfaces';
import { indexPageContent } from '../utils/indexPageContent';
import StartSection from '../components/organisms/StartSection/StartSection';
import Nav from '../components/molecules/Nav/Nav';
import Footer from '../components/molecules/Footer/Footer';
import ContactForm from '../components/organisms/ContactForm/ContactForm';

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
