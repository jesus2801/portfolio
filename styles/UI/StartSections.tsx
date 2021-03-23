import styled from '@emotion/styled';

import { blue, grey, black } from '../../utils/variables';

export default {
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
    transition: all 900s ease;

    &.ocult {
      opacity: 0;
      visibility: hidden;
    }

    .loader.active,
    h2.active {
      opacity: 0;
    }

    .loader.ocult,
    h2.ocult {
      display: none;
    }

    h2 {
      margin-top: 30px;
      color: ${black};
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      opacity: 1;
      transition: opacity 400ms ease;
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
