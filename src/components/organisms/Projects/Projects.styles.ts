import styled from '@emotion/styled';

export const TitleCtn = styled.div`
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
`;

export const MainGrid = styled.div`
  margin-top: 80px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1250px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 710px) {
    grid-template-columns: 100%;
  }
`;
