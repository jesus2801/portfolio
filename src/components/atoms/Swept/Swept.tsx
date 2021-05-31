import { SweptProps } from '@interfaces/props';
import React from 'react';

import { Swetp } from './Swept.styles';

const Swept = ({ start }: SweptProps) => {
  return (
    <Swetp className={start ? 'active' : ''}>
      <div></div>
      <div></div>
      <div></div>
    </Swetp>
  );
};

export default Swept;
