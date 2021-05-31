import { NextPage } from 'next';
import React from 'react';


import StartSection from '@components/organisms/StartSection/StartSection';
import AboutSection from '@components/organisms/AboutSection/AboutSection';
import ContactForm from '@components/organisms/ContactForm/ContactForm';
import Projects from '@components/organisms/Projects/Projects';
import Landing from '@components/organisms/Landing/Landing';
import Skills from '@components/organisms/Skills/Skills';
import Footer from '@components/molecules/Footer/Footer';
import Layout from '@components/templates/Layout/Layout';
import ArrowUp from '@components/atoms/ArrowUp/ArrowUp';
import Nav from '@components/molecules/Nav/Nav';

import { indexPageContent } from '@utils/indexPageContent';

import { IndexCtx } from '@interfaces';

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
