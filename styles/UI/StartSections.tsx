import styled from '@emotion/styled';

import { blue, grey, black } from '../../utils/variables';

export default {
  Swetp: styled.div`
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
      background-color: ${blue};
      animation-delay: 80ms;
    }

    div:nth-of-type(2) {
      background-color: ${black};
      animation-delay: 280ms;
    }

    div:nth-of-type(3) {
      background-color: ${blue};
      animation-delay: 480ms;
    }

    &.active {
      div {
        animation-name: Swept;
      }
    }

    /* div:nth-of-type(2) {
      background-color: ${blue};
      animation-delay: 80ms;
    } */

    @keyframes Swept {
      from {
        transform: translateX(0%);
      }
      to {
        transform: translateX(200%);
      }
    }
  `,
  MainCtn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #fafcff;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    transition: all 900ms ease;

    &.ocult {
      opacity: 0;
      visibility: hidden;
    }

    .loader.active {
      opacity: 0;
    }

    .loader.ocult {
      display: none;
    }

    button {
      font-size: 20px;
      cursor: pointer;
      border: none;
      border-radius: 5px;
      outline: none;
      padding: 6px 20px;
      color: ${black};
      background-color: #fafcff;

      -webkit-box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);
      -moz-box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);
      box-shadow: 1px 3px 8px 1px rgba(219, 219, 219, 1);

      opacity: 0;
      visibility: hidden;
      transition: all 400ms ease;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  `,
};