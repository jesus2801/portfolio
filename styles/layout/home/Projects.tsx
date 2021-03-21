import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  TitleCtn: styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 10px;
      background-color: ${blue};
      border-bottom-right-radius: 100px;
      border-top-right-radius: 100px;

      h2 {
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-weight: 600;
        text-align: center;
        font-size: 43px;
        text-transform: uppercase;
      }

      p {
        color: #fff;
        max-width: 500px;
        text-align: center;
      }
    }
  `,

  MainGrid: styled.div`
    margin-top: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .card-ctn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;

      .card {
        width: 100%;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;

        -webkit-box-shadow: 2px 5px 8px 0px rgba(212, 212, 212, 1);
        -moz-box-shadow: 2px 5px 8px 0px rgba(212, 212, 212, 1);
        box-shadow: 2px 5px 8px 0px rgba(212, 212, 212, 1);
      }
    }
  `,
};
