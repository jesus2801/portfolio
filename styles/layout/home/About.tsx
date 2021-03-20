import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  AbsBlue2: styled.object`
    position: absolute;
    margin-top: 130px;
    width: 450px;
    z-index: -1;
  `,

  MainZone: styled.div`
    margin: 200px auto 0 auto;
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
        /* align-items: center;
        justify-content: center; */
        margin: 20px 0;
        color: ${grey};

        overflow: hidden;
        position: relative;
        span {
          display: block;
          width: 500px;
          overflow: hidden;
        }
        span:first-of-type {
          /* transform: translateX(-500px); */
        }
      }

      .button {
        background-color: ${blue};
      }
    }
  `,
};
