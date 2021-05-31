import React from 'react';

import { FooterDiv } from './Footer.styles';

const Footer = () => {
  return (
    <FooterDiv>
      <p>Copyright &copy; {new Date().getFullYear()} Jesús García. All rights reserved</p>
    </FooterDiv>
  );
};

export default Footer;
