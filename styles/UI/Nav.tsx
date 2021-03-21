import styled from '@emotion/styled';

import { blue, grey, black } from '../../utils/variables';

export default {
  Nav: styled.nav`
    width: fit-content;
    margin: 14px 0 0 30px;
    display: flex;
    border-radius: 1px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${black};
    padding: 6px 0;

    img {
      width: 28px;
      margin: 0 20px;
    }

    p {
      margin-right: 20px;
      color: #fff;
      font-weight: 300;
      font-size: 16px;
      cursor: pointer;
    }
  `,
};
