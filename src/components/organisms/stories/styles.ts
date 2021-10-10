import styled from '@emotion/styled';

export const StoriesDiv = styled.div`
  margin-top: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;

  div {
    background-color: #000;
    height: 300px;
  }
`;
