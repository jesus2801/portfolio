import styled from '@emotion/styled';

import { blue } from '../../utils/variables';

export default {
  Footer: styled.footer`
    margin-top: 20px;
    width: 100%;
    background-color: ${blue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    p {
      color: #fff;
      text-align: center;
    }
  `,
};
