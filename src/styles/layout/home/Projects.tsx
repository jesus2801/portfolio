import styled from '@emotion/styled';

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
      background-color: var(--blue);
      border-bottom-right-radius: 100px;
      border-top-right-radius: 100px;

      h2 {
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-weight: 600;
        text-align: center;
        font-size: 43px;
        text-transform: uppercase;

        @media (max-width: 600px) {
          font-size: 30px;
        }
      }

      p {
        color: #fff;
        max-width: 500px;
        text-align: center;
      }
    }

    @media (max-width: 1250px) {
      align-items: flex-start;
      div {
        width: 90%;
      }
    }

    @media (max-width: 710px) {
      grid-column-end: 2;
      div {
        width: 100%;
      }
    }
  `,

  MainGrid: styled.div`
    margin-top: 80px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .card-ctn {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 5px;

        cursor: pointer;
        will-change: auto;
        transition: all 400ms ease;

        -webkit-box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);
        -moz-box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);
        box-shadow: 1px 4px 7px 0px rgba(214, 214, 214, 1);

        &:hover {
          transform: translateY(-40px);
          -webkit-box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
          -moz-box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
          box-shadow: 1px 5px 9px 0px rgba(201, 201, 201, 1);
        }

        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          padding: 20px;
          object {
            width: 100%;
            cursor: pointer;
          }

          h3 {
            margin: 20px;
            color: var(--black);
            font-family: 'Montserrat', sans-serif;
            font-size: 30px;
            text-align: center;
          }

          p {
            color: var(--grey);
            font-size: 15px;
          }
        }
      }
    }

    @media (max-width: 1250px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 710px) {
      grid-template-columns: 100%;
    }
  `,
};
