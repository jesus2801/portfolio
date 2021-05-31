import styled from '@emotion/styled';

export default {
  Nav: styled.nav`
    width: fit-content;
    margin: 14px 0 0 30px;
    display: flex;
    border-radius: 1px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: var(--black);
    padding: 6px 0;

    img {
      width: 28px;
      height: 14px;
      margin: 0 20px;
    }

    p {
      margin: 0 20px 0 0;
      color: #fff;
      font-weight: 300;
      font-size: 16px;
      cursor: pointer;
    }

    @media (max-width: 420px) {
      margin: 14px 0 0 6px;

      p {
        font-size: 15px;
      }

      img {
        width: 24px;
        height: 12px;
      }
    }

    @media (max-width: 357px) {
      p:first-of-type {
        margin-left: 20px;
        text-align: center;
      }

      img {
        display: none;
      }
    }
  `,
};
