import React from 'react';

import Styles from '../../styles/UI/Nav';

const Nav = () => {
  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)!.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Styles.Nav>
      <img src="/static/icons/menu.png" alt="Menu icon" />
      <p onClick={() => scrollTo('about-section')}>About</p>
      <p onClick={() => scrollTo('skills-section')}>Skills</p>
      <p onClick={() => scrollTo('projects-section')}>Projects</p>
    </Styles.Nav>
  );
};

export default Nav;
