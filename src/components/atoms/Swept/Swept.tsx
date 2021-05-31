import React from 'react';

import { Swetp } from './Swept.styles';

const Swept = ({ start }: { start: boolean }) => {
  return (
    <Swetp className={start ? 'active' : ''}>
      <div></div>
      <div></div>
      <div></div>
    </Swetp>
  );
};

export default Swept;
