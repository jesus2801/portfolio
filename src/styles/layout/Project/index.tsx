import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  Ribbon: styled.object`
    width: 65px;
    position: absolute;
    top: 0;
    left: 17vw;

    @media (max-width: 850px) {
      width: 50px;
    }

    @media (max-width: 610px) {
      left: 7vw;
    }

    @media (max-width: 470px) {
      display: none;
    }
  `,

  MainCtn: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 70vw;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;

    -webkit-box-shadow: 0px 0px 8px 2px rgba(207, 207, 207, 1);
    -moz-box-shadow: 0px 0px 8px 2px rgba(207, 207, 207, 1);
    box-shadow: 0px 0px 8px 2px rgba(207, 207, 207, 1);

    @media (max-width: 610px) {
      width: 90vw;
    }
  `,

  YoutubeVideo: styled.iframe`
    display: block;
    width: 100%;
    height: calc(70vw / 1.7);
    margin: 0 auto;
    @media (max-width: 610px) {
      height: calc(90vw / 1.7);
    }
  `,

  Text: styled.p`
    color: ${grey};
    width: 100%;
    margin: 30px 0;
    font-size: 17px;
    line-height: 25px;
  `,

  Title: styled.h2`
    width: fit-content;
    font-family: 'Montserrat', sans-serif;
    font-size: 43px;
    text-align: center;
    color: ${black};
    margin-top: 40px;

    &::after {
      display: block;
      content: '';
      width: 50%;
      height: 8px;
      border-radius: 100px;
      background-color: ${blue};
      margin-top: 3px;
    }
  `,
};
