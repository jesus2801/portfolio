import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  Title: styled.div`
    margin: 150px auto 0 auto;
    width: fit-content;
    h2 {
      text-align: center;
    }
    p {
      color: ${grey};
      max-width: 400px;
      text-align: center;
    }
  `,

  Skills: styled.div`
    margin: 50px auto 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;

    div {
      background-color: #fff;
      border-radius: 7px;
      height: 400px;

      -webkit-box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);
      -moz-box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);
      box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);

      &:first-of-type,
      &:nth-of-type(3) {
        margin-top: 50px;
      }
    }
  `,
};
