import React from 'react';

import { NavDiv } from './Nav.styles';

const Nav = () => {
  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)!.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <NavDiv>
      <img src="/static/icons/menu.png" alt="Menu icon" />
      <p onClick={() => scrollTo('about-section')}>About</p>
      <p onClick={() => scrollTo('skills-section')}>Skills</p>
      <p onClick={() => scrollTo('projects-section')}>Projects</p>
      <p onClick={() => scrollTo('contact-section')}>Contact Me</p>
    </NavDiv>
  );
};

export default Nav;
