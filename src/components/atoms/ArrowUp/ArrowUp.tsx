import React, { useEffect } from 'react';

import { ArrowDiv } from './ArrowUp.styles';

const ArrowUp = () => {
  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      if (scrollY > 200) {
        document.getElementById('arrow-up')!.classList.add('active');
        return;
      }
      document.getElementById('arrow-up')!.classList.remove('active');
    };
  });

  return (
    <ArrowDiv onClick={goToTop} id="arrow-up">
      <img src="/static/icons/arrow-up.png" alt="arrow top, up" />
    </ArrowDiv>
  );
};

export default ArrowUp;
