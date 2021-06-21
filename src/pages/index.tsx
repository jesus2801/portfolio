import { useSelector } from 'react-redux';
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
import Flags from '@components/atoms/Flags/Flags';
import Nav from '@components/molecules/Nav/Nav';

import { AppCtx } from '@interfaces/index';

const Index = () => {
  const { lng } = useSelector((state: AppCtx) => state.database);

  return (
    <Layout title={lng['title']}>
      <Flags />
      <Nav />
      <StartSection />

      <Landing title="Jesús García" />

      <AboutSection life={lng['lifeText']} knowledge={lng['knowledgeText']} />

      <Skills />

      <Projects />

      <ContactForm />

      <ArrowUp />

      <Footer />
    </Layout>
  );
};

export default Index;
