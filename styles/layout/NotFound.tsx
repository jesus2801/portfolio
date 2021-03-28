import styled from '@emotion/styled';
import { blue } from '../../utils/variables';

export default {
  MainDiv: styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      width: 2px;
      height: 30px;
      border-radius: 100px;
      background-color: ${blue};
      margin: 0 20px;
    }

    p {
      font-size: 17px;
    }
  `,
};
