import styled from '@emotion/styled';

export const StoriesDiv = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 98%;
  }
`;

export const StoriesTitle = styled.div`
  width: fit-content;
  margin: 100px auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--black);
    max-width: 400px;
    text-align: center;
  }
`;
