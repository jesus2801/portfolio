import React from 'react';

import Styles from '../../styles/UI/StartSections';

const Swept = ({ start }: { start: boolean }) => {
  return (
    <Styles.Swetp className={start ? 'active': ''}>
      <div></div>
      <div></div>
      <div></div>
    </Styles.Swetp>
  );
};

export default Swept;
