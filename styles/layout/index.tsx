import styled from '@emotion/styled';

import { black, blue } from '../../utils/variables';

export default {
  AbsBlue1: styled.object`
    position: absolute;
    top: -5px;
    right: -1px;
    width: 450px;
    z-index: -1;
  `,

  MainZone: styled.div`
    width: 80%;
    margin: 180px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2fr);

    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 40px;
      text-transform: uppercase;
      color: ${black};
    }

    p {
      font-size: 22px;
      color: ${black};
      min-height: 30px;
    }
  `,
};
