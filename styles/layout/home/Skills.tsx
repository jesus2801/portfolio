import styled from '@emotion/styled';

import { black, grey } from '../../../utils/variables';

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

    @media (max-width: 490px) {
      p {
        max-width: 300px;
      }
    }
  `,

  Skills: styled.div`
    margin: 50px auto 0 auto;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;

      background-color: #fff;
      border-radius: 7px;
      height: 450px;

      transition: transform 500ms ease;

      -webkit-box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);
      -moz-box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);
      box-shadow: 1px 4.5px 8px 0px rgba(209, 209, 209, 1);

      &:first-of-type,
      &:nth-of-type(3) {
        margin-top: 50px;
      }

      &:hover {
        transform: translateY(-20px);
      }

      object {
        width: 130px;
      }

      h3 {
        margin-top: 20px;
        color: ${black};
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 25px;
        text-transform: capitalize;
        text-align: center;
      }

      p {
        color: ${grey};
        font-size: 15px;
        margin-top: 13px;
      }
    }

    @media (max-width: 1220px) {
      grid-template-columns: repeat(2, 1fr);

      div:first-of-type {
        margin-top: 0px;
      }
    }

    @media (max-width: 750px) {
      grid-template-columns: 100%;

      div:first-of-type,
      div:nth-of-type(3) {
        margin-top: 50px;
      }

      div:nth-of-type(2) {
        grid-row-start: 1;
        grid-row-end: 2;
      }

      div:nth-of-type(3) {
        grid-row-start: 2;
        grid-row-end: 3;
      }
    }
  `,
};
