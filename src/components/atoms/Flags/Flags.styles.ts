import styled from '@emotion/styled';

export const FlagsDiv = styled.div`
  position: fixed;
  top: 10px;
  right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  z-index: 99999999999;

  img {
    width: 30px;
    cursor: pointer;

    &:first-of-type {
      margin-right: 20px;
    }
  }
`;
