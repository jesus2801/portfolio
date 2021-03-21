import styled from '@emotion/styled';

import { blue, grey, black } from '../../utils/variables';

export default {
  Arrow: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    position: fixed;
    width: 45px;
    height: 45px;

    bottom: 20px;
    right: 35px;
    background-color: ${blue};
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 400ms ease;
    transform: translateY(80px);

    &.active {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }

    img {
      width: 13px;
      transform: rotate(-90deg);
    }
  `,
};
