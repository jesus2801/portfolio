import React from 'react';

import Styles from '../../styles/UI/Footer';

const Footer = () => {
  return (
    <Styles.Footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} Jesús García. All
        rights reserved
      </p>
    </Styles.Footer>
  );
};

export default Footer;
