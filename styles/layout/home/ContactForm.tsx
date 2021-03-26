import styled from '@emotion/styled';

import { black, blue, grey } from '../../../utils/variables';

export default {
  Title: styled.h2`
    margin-top: 20px;
    text-align: center;
  `,

  Form: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 91%;
    max-width: 370px;
    background-image: url('/static/abstract/blur.png');
    border-radius: 10px;
    margin: 20px auto;

    -webkit-box-shadow: 1px 4px 9px 0px rgba(217, 217, 217, 1);
    -moz-box-shadow: 1px 4px 9px 0px rgba(217, 217, 217, 1);
    box-shadow: 1px 4px 9px 0px rgba(217, 217, 217, 1);

    object {
      width: 100px;
      margin: 28px 0;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 10px;
      padding: 16px;

      input[type='submit'] {
        width: 100%;
        padding: 4px 14px;
        border-radius: 2px;
        background-color: ${blue};

        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;

        font-size: 18px;
      }

      .form-group {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 20px;

        label {
          font-size: 14px;
          color: ${black};
        }

        input,
        textarea {
          width: 100%;
          max-width: 100%;
          outline: none;
          border: none;
          border-bottom: 1px solid #d4d4d4;
          padding: 5px;
          font-size: 16px;
          color: ${black};
          will-change: auto;
          transition: border-bottom 300ms ease;

          &:focus {
            border-bottom: 1px solid ${blue};
          }
        }

        textarea {
          resize: vertical;
          max-height: 180px;
          min-height: 40px;
        }
      }
    }
  `,
};
