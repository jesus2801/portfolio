import React, { useEffect, useRef } from 'react';

import { ArrowDiv } from './ArrowUp.styles';

/**
 * Component to 
 * @component
 */
const ArrowUp = () => {
  const ref = useRef(null as null | HTMLDivElement);

  /**
   * adf asjdflas dfjaslfkj
   */
  const goToTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (ref.current) {
      window.onscroll = () => {
        if (scrollY > 200) {
          ref.current!.classList.add('active');
          return;
        }

        ref.current!.classList.remove('active');
      };
    }
  }, [ref]);

  return (
    <ArrowDiv onClick={goToTop} ref={ref}>
      <img src="/static/icons/arrow-up.png" alt="arrow top, up" />
    </ArrowDiv>
  );
};

export default ArrowUp;
