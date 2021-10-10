import styled from '@emotion/styled';

export const StoriesDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

export const StoriesTitle = styled.div`
  width: fit-content;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--black);
    max-width: 400px;
  }
`;
