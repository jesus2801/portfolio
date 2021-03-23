import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  YoutubeVideo: styled.iframe`
    display: block;
    width: 70vw;
    height: calc(70vw / 1.7);
    margin: 0 auto;
    @media (max-width: 610px) {
      width: 90vw;
      height: calc(90vw / 1.7);
    }
  `,

  Text: styled.p`
    color: ${grey};
    width: 70%;
    margin: 30px auto;
    font-size: 17px;
  `,

  Title: styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    text-align: center;
    color: ${black};
    margin-top: 40px;
  `,
};
