import { AppCtx } from '@interfaces/index';
import React from 'react';
import { useSelector } from 'react-redux';

import { NavDiv } from './Nav.styles';

const Nav = () => {
  const { lng } = useSelector((state: AppCtx) => state.database);

  const scrollTo = (sectionId: string) => {
    document.getElementById(sectionId)!.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <NavDiv>
      <img src="/static/icons/menu.png" alt="Menu icon" />
      <p onClick={() => scrollTo('about-section')}>{lng['nav']['about']}</p>
      <p onClick={() => scrollTo('skills-section')}>{lng['nav']['skills']}</p>
      <p onClick={() => scrollTo('projects-section')}>{lng['nav']['projects']}</p>
      <p onClick={() => scrollTo('contact-section')}>{lng['nav']['contact']}</p>
    </NavDiv>
  );
};

export default Nav;
