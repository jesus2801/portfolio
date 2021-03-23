import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  AbsBlue2: styled.object`
    position: absolute;
    margin-top: 50px;
    width: 450px;
    z-index: -1;

    @media (max-width: 700px) {
      width: 350px;
    }
  `,

  MainZone: styled.div`
    margin: 180px auto 0 auto;
    width: 80%;
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 40px;

    .image {
      object {
        max-width: 100%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .menu {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        p {
          position: relative;
          font-size: 17px;
          color: ${black};
          &:first-of-type {
            margin-right: 26px;
          }
          &.active::after {
            margin-top: 4px;
            content: '';
            display: block;
            width: 100%;
            height: 3px;
            border-radius: 100px;
            background-color: ${blue};
          }
        }
      }

      .text {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 20px 0;

        overflow: hidden;
        position: relative;
        p {
          min-width: 100%;
          color: ${grey};
          transition: transform 400ms ease;
        }
        &.active {
          p {
            transform: translateX(-100%);
          }
        }
      }

      .button {
        background-color: ${blue};
      }
    }

    @media (max-width: 1000px) {
      margin: 240px auto 0 auto;
      grid-template-columns: 100%;

      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        object {
          max-width: 70%;
        }
      }
    }

    @media (max-width: 860px) {
      margin: 290px auto 0 auto;
    }

    @media (max-width: 700px) {
      margin: 300px auto 0 auto;

      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        object {
          max-width: 90%;
        }
      }
    }
  `,
};
