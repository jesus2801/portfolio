import React, { useEffect } from 'react';

import Styles from '../../styles/UI/ArrowUp';

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
    <Styles.Arrow onClick={goToTop} id="arrow-up">
      <img src="/static/icons/arrow-up.png" alt="arrow top, up" />
    </Styles.Arrow>
  );
};

export default ArrowUp;
