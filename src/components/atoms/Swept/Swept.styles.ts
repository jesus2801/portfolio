import styled from '@emotion/styled';

export const Swetp = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(-100%);
  z-index: 101;

  div {
    position: fixed;
    width: 100%;
    height: 100vh;
    animation-duration: 900ms;
  }

  div:first-of-type {
    background-color: var(--blue);
    animation-delay: 80ms;
  }

  div:nth-of-type(2) {
    background-color: var(--black);
    animation-delay: 280ms;
  }

  div:nth-of-type(3) {
    background-color: var(--blue);
    animation-delay: 480ms;
  }

  &.active {
    div {
      animation-name: Swept;
    }
  }

  @keyframes Swept {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(200%);
    }
  }
`;
