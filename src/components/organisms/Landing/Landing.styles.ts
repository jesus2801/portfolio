import styled from '@emotion/styled';

export const AbsBlue1 = styled.object`
  position: absolute;
  top: -5px;
  right: -1px;
  width: 450px;
  z-index: -1;
`;

export const MainZone = styled.div`
  width: 80%;
  margin: 140px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
      margin: 0;
    }

    p {
      margin: 11px 0;
      font-size: 23px;
      color: var(--black);
      min-height: 30px;
      span.ocult {
        opacity: 0;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      a {
        text-decoration: none;
        &:first-of-type {
          margin-right: 10px;
          button {
            background-color: var(--blue);
          }
        }

        &:nth-of-type(2) {
          button {
            background-color: var(--black);
          }
        }
      }
    }
  }

  object {
    max-width: 94%;
  }

  @media (max-width: 870px) {
    grid-template-columns: 100%;

    .info {
      margin-top: 90px;
      align-items: center;
    }

    div:nth-of-type(2) {
      grid-row: 1 / 2;
    }
  }
`;
