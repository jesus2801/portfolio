import { AppCtx } from '@interfaces/index';
import React from 'react';
import { useSelector } from 'react-redux';

import { FooterDiv } from './Footer.styles';

const Footer = () => {
  const { lng } = useSelector((state: AppCtx) => state.database);
 
  return (
    <FooterDiv>
      <p>
        Copyright &copy; {new Date().getFullYear()} Jesús García. {lng['copy']}
      </p>
    </FooterDiv>
  );
};

export default Footer;
